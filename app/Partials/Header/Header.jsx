"use client";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import { LuAlignRight, LuX } from "react-icons/lu";




const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for auth state
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const menu = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Product", path: "/products" },
    { label: "Contact", path: "/contact" },
  ];

  const productSubMenu = {
    link: [
      { name: "Zunoon", link: "#" },
      { name: "Ahmed", link: "#" },
      { name: "Sohail", link: "#" },
    ],
    middle: [
      { title: "Feature 1", description: "Feature 1 description" },
      { title: "Feature 2", description: "Feature 2 description" },
    ],
    right: [
      {
        title: "Advanced Feature",
        image: "/Images/img1.jpg",
        subTitle: "Pro",
        description: "Lorem ipsum dolor sit amet",
      },
      {
        title: "Another Feature",
        image: "/Images/img2.jpg",
        subTitle: "Pro",
        description: "Lorem ipsum dolor sit amet",
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      <header className="fixed top-15 left-0 w-full z-50">
        <nav
          className={`navbar flex items-center justify-between w-[92vw] mx-auto bg-gray-100 px-6 md:px-12 py-4 md:py-6 rounded-3xl md:rounded-full transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-32"
            }`}
        >
          <div className="flex items-center gap-8 justify-between w-full ">
            <Link href="/">
              <img src={"/Images/linktree-logo.svg"} alt="Linktree Logo" className="w-36" />
            </Link>

            <ul className="md:flex gap-6 relative hidden">
              {menu.map((item, index) => {
                if (item.label === "Product") {
                  return (
                    <li
                      key={index}
                      onMouseEnter={() => setShowMegaMenu(true)}
                      onMouseLeave={() => setShowMegaMenu(false)}
                      className="relative"
                    >
                      <Link
                        href={item.path}
                        className="text-gray-800 hover:text-black"
                      >
                        {item.label}
                      </Link>

                      {/* Mega menu */}
                      {showMegaMenu && (
                        <div className="absolute top-4 left-0 bg-white shadow-lg rounded-xl p-6 w-[700px] grid grid-cols-3 gap-4 mt-2 z-0 h-[50dvh] overflow-y-auto">
                          {/* Left */}
                          <div className="flex flex-col gap-2 border-r border-gray-200">
                            {productSubMenu.link.map((linkItem, idx) => (
                              <a
                                key={idx}
                                href={linkItem.link}
                                className="text-gray-700 hover:text-black"
                              >
                                {linkItem.name}
                              </a>
                            ))}
                          </div>

                          {/* Middle */}
                          <div className="flex flex-col gap-2 border-r border-gray-200">
                            {productSubMenu.middle.map((midItem, idx) => (
                              <div key={idx}>
                                <h5 className="font-bold">{midItem.title}</h5>
                                <p className="text-gray-600 text-sm">
                                  {midItem.description}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Right */}
                          <div className="flex flex-col gap-4">
                            {productSubMenu.right.map((rightItem, idx) => (
                              <div key={idx} className="flex flex-col items-start">
                                <h5 className="font-bold">{rightItem.title}</h5>
                                <img
                                  src={rightItem.image}
                                  alt={rightItem.title}
                                  className="object-contain rounded-lg "
                                  width={150} height={60}
                                />
                                <h6 className="text-sm">{rightItem.subTitle}</h6>
                                <p className="text-gray-600 text-sm">
                                  {rightItem.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <Link
                        href={item.path}
                        className="text-gray-800 hover:text-black"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
            {/* Desktop Login */}
            <div className="md:flex gap-4 hidden">
              <Link
                href="/Auth/login"
                className="bg-gradient-to-r from-slate-100 to-slate-900 px-5 py-3 rounded-xl inline-block text-center"
              >
                <span className="text-slate-800">Login</span> / <span className="text-slate-200">Signup</span>
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-2xl p-2">
                {showMobileMenu ? <LuX /> : <LuAlignRight />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {showMobileMenu && (
            <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-xl mt-2 p-6 flex flex-col gap-4 md:hidden border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200">
              <ul className="flex flex-col gap-4">
                {menu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-lg font-medium text-gray-800 hover:text-black block"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t pt-4">
                <Link
                  href="/Auth/login"
                  className="bg-black text-white px-5 py-3 rounded-xl block text-center w-full"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Login / Signup
                </Link>
              </div>
            </div>
          )};
        </nav>
      </header >
    </>
  );
};

export default Header;
