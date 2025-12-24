"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';

// Data for the slides. Each slide has 3 profiles (2 small, 1 large).
const SLIDE_DATA = [
  {
    id: 1,
    theme: "bg-slate-50",
    // Left Top Card
    profile1: {
      img: "https://i.pravatar.cc/150?img=32",
      text: "Exceptional analytics capabilities that helped us grow 200%.",
      name: "Sarah Jenks",
      role: "Marketing Director"
    },
    // Left Bottom Card
    profile2: {
      img: "https://i.pravatar.cc/150?img=11",
      text: "The UI is intuitive and the team supports us 24/7.",
      name: "Michael Chen",
      role: "Product Lead"
    },
    // Right Big Card
    profile3: {
      img: "https://i.pravatar.cc/150?img=5",
      text: "We migrated our entire workflow to this platform. It has been a game changer for our remote teams, increasing productivity by over 40% in just two months.",
      name: "Elara Vance",
      role: "CTO, TechFlow"
    }
  },
  {
    id: 2,
    theme: "bg-indigo-50",
    profile1: {
      img: "https://i.pravatar.cc/150?img=9",
      text: "Seamless integration with our existing stack.",
      name: "David Ross",
      role: "DevOps Engineer"
    },
    profile2: {
      img: "https://i.pravatar.cc/150?img=24",
      text: "Best customer service I have experienced in years.",
      name: "Jenny Wilson",
      role: "Sales Manager"
    },
    profile3: {
      img: "https://i.pravatar.cc/150?img=8",
      text: "The scalability of this solution is unmatched. We handled our Black Friday traffic without a single hiccup, thanks to the robust architecture provided.",
      name: "Marcus Johnson",
      role: "VP of Engineering"
    }
  }
];

// Reusable Card Component
const ProfileCard = ({ img, text, name, role, isLarge = false }) => {
  return (
    <div className={`
      w-full h-full bg-white rounded-2xl shadow-sm border border-slate-100 
      flex flex-col items-center justify-center p-6 text-center 
      hover:shadow-md transition-shadow duration-300 bg-[#f3f3f1]
    `}>
      {/* 1. Rounded Image at Top */}
      <div className={`${isLarge ? 'w-32 h-32' : 'w-20 h-20'} mb-4 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm bg-[#f3f3f1]`}>
        <img src={img} alt={name} className="w-full h-full object-cover " />
      </div>

      {/* 2. Text in Middle */}
      <p className={`text-slate-600 mb-6 italic ${isLarge ? 'text-lg md:text-xl px-4' : 'text-sm'}`}>
        "{text}"
      </p>

      {/* 3. Name & Designation at Bottom */}
      <div className="mt-auto">
        <h3 className={`font-bold text-slate-800 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
          {name}
        </h3>
        <span className={`block text-slate-400 font-medium uppercase tracking-wider ${isLarge ? 'text-sm mt-1' : 'text-xs'}`}>
          {role}
        </span>
      </div>
    </div>
  );
};

// The layout component for a single slide
const SlideContent = ({ data }) => {
  return (
    <div className={`w-full h-full p-4 md:p-12 flex items-center justify-center ${data.theme}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl h-auto md:h-[600px]">
        
        {/* Left Column (Stacked 2 Cards) */}
        <div className="flex flex-col gap-6 h-full min-h-[500px] md:min-h-0">
          {/* Top Small Card */}
          <div className="flex-1">
            <ProfileCard 
              img={data.profile1.img}
              text={data.profile1.text}
              name={data.profile1.name}
              role={data.profile1.role}
            />
          </div>
          {/* Bottom Small Card */}
          <div className="flex-1">
            <ProfileCard 
              img={data.profile2.img}
              text={data.profile2.text}
              name={data.profile2.name}
              role={data.profile2.role}
            />
          </div>
        </div>

        {/* Right Column (1 Big Card) */}
        <div className="h-full min-h-[400px] md:min-h-0">
          <ProfileCard 
            img={data.profile3.img}
            text={data.profile3.text}
            name={data.profile3.name}
            role={data.profile3.role}
            isLarge={true} 
          />
        </div>

      </div>
    </div>
  );
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? SLIDE_DATA.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === SLIDE_DATA.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="w-full min-h-screen relative group overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SLIDE_DATA.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 min-h-screen flex items-center">
             <SlideContent data={slide} />
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full cursor-pointer hover:bg-white shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100 md:opacity-0" onClick={prevSlide}>
        <ChevronLeft size={24} className="text-slate-800" />
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full cursor-pointer hover:bg-white shadow-lg z-10 transition-all opacity-0 group-hover:opacity-100 md:opacity-0" onClick={nextSlide}>
        <ChevronRight size={24} className="text-slate-800" />
      </div>

      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-10">
        {SLIDE_DATA.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer transition-all duration-300 ${
              currentIndex === slideIndex ? 'text-indigo-600 scale-125' : 'text-slate-300 hover:text-slate-400'
            }`}
          >
            <Circle size={10} fill="currentColor" />
          </div>
        ))}
      </div>
    </div>
  );
}