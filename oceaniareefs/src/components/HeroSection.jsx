// src/components/HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex flex-col justify-center items-center text-white text-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1582623838120-455da222cdc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974"
        alt="Great Barrier Reef"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Text Content */}
      <div className="z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold italic drop-shadow-lg">
        Data-Driven Solutions for Cost-Effective Conservation
        </h1>
      </div>

      {/* Wavy Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.74-16.56,168.57-17.16,250.86-0.61,90.41,18.35,173.83,55.27,264.06,68.53,66.72,9.65,130.5,3.21,193.69-10.57V120H0V97.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
