"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./slider.css"; 
import Image from "next/image";



const slides = [
  { id: 1, title: "Rectangle", img: "/Images/img1.jpg", shape: "rectangle" },
  { id: 2, title: "Square", img: "/Images/img2.jpg", shape: "square" },
  { id: 3, title: "Circle", img: "/Images/img3.jpg", shape: "circle" },
  { id: 4, title: "Rectangle", img: "/Images/img4.jpg", shape: "rectangle" },
  { id: 5, title: "Square", img: "/Images/img5.jpg", shape: "square" },
  { id: 6, title: "Circle", img: "/Images/img6.jpg", shape: "circle" },
];

 

export default function ShapeSlider() {

  return (
    <div className="w-full py-20">
      <Swiper
        modules={[Autoplay]}
        loop={false}
        speed={4000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={20}
        grabCursor={true}
        className="infinite-swiper"
        breakpoints={{
          1280: { slidesPerView: 3 },
          1024: { slidesPerView: 2 },
          640: { slidesPerView: 1 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`tilt-card cursor-pointer group`}
              onClick={(e) => {
                e.currentTarget.classList.toggle("rotate-3d");
              }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className={`tilt-image  ${
                  slide.shape === "circle"
                    ? "rounded-full"
                    : slide.shape === "square"
                    ? "rounded-md"
                    : ""
                }`}
              />
              {/* <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow">
                Click Me
              </button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}