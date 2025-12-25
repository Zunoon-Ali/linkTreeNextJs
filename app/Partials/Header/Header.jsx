"use client";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";



const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for auth state

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
    <header className="fixed top-15 left-0 w-full z-50">
      <nav
        className={`navbar flex items-center justify-between w-[80vw] mx-auto bg-gray-100 px-12 py-6 rounded-full transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-32"
          }`}
      >
        <div className="flex items-center gap-8">
          <Link href="/">
            <img src={"/Images/linktree-logo.svg"} alt="Linktree Logo" className="w-36" />
          </Link>

          <ul className="flex gap-6 relative">
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
        </div>

        <div className="flex gap-4">
          <Link
            href="/Auth/login"
            className="bg-gradient-to-r from-slate-100 to-slate-900 px-5 py-3 rounded-xl inline-block text-center"
          >
            <span className="text-slate-800">Login</span> / <span className="text-slate-200">Signup</span>
          </Link>



        </div>
      </nav>
    </header>
  );
};

export default Header;
