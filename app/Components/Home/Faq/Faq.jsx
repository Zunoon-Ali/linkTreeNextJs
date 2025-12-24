"use client";
import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "What is Flowbite?",
    p1: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    p2: "Check out this guide to learn how to",
    alink: "#",
    atext: "Get Started",
    p3: "and start developing websites even faster with components on top of Tailwind CSS."
  },
  {
    id: 2,
    question: "Is there a Figma file available?",
    p1: "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file."
  },
  {
    id: 3,
    question: "Can I use Flowbite with React?",
    p1: "Yes, Flowbite components can be used with React and other frameworks. You can customize them according to your project requirements."
  },
  {
    id: 4,
    question: "Is Flowbite free to use?",
    p1: "Yes, Flowbite is open-source and free to use for personal and commercial projects."
  },
  {
    id: 5,
    question: "How do I install Flowbite?",
    p1: "You can install Flowbite via npm: npm install flowbite and include it in your Tailwind project."
  },
];

const Faq = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq-sec" className='min-h-screen bg-[#780016] w-full py-10'>
      <h2 className='font-extrabold text-slate-900 text-center text-6xl mb-8 text-violet-200'>Questions & Answers</h2>
      <div className="flex items-center justify-center gap-5 px-4 flex-col ">
        {faqData.map((item) => (
          <div key={item.id} className="w-full max-w-5xl rounded-xl  ">
            <h2 id={`accordion-card-heading-${item.id} py-4 px-6`}>
              <button
                type="button"
                onClick={() => toggleAccordion(item.id)}
                className={`flex items-center justify-between w-full p-5 font-medium text-white bg-[#51000f]  rounded-xl  gap-3 py-[34px] px-[45px]  ${openItem === item.id ? 'bg-[#51000f] text-white' : ''}`}
                aria-expanded={openItem === item.id}
                aria-controls={`accordion-card-body-${item.id}`}
              >
                <span className='text-2xl text-[#e9c0e9]'>{item.question}</span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform duration-200 bg-[#51000f] ${openItem === item.id ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-card-body-${item.id}`}
              className={`${openItem === item.id ? 'block' : 'hidden'}`}
              aria-labelledby={`accordion-card-heading-${item.id}`}
            >
              <div className="p-4 md:p-5 text-[#e9c0e9] bg-[#51000f] text-lg relative rounded-b-xl -top-3">
                <p className="mb-2">{item.p1}</p>
                {item.p2 && (
                  <p>
                    {item.p2} <a href={item.alink} className="text-white hover:underline font-bold">{"  "}{item.atext}{"  "}</a>{item.p3}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;