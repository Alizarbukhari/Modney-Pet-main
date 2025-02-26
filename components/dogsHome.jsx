"use client"
import React, { useState } from "react";
import Image from "next/image";

const pets = [
  { id: 1, image: "/pet-images/pet1.png", name: "지돌이(♂) / 4살" },
  { id: 2, image: "/pet-images/pet2.png", name: "초롱이(♀) / 6살" },
  { id: 3, image: "/pet-images/cat.png" , name: "초롱이(♂) / 6살" },
  { id: 4, image: "/pet-images/pet3.png", name: " 피유(♀) / 6살" },
  { id: 5, image: "/pet-images/pet4.png", name: "glasses pet" },
  { id: 6, image: "/pet-images/pet5.png", name: "window pet" },
];

export default function Dogshome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;
  
  // Function to go to next slide/group
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      // Agar current group last group hai, toh reset to 0, warna next image
      prevIndex >= pets.length - visibleCount ? 0 : prevIndex + 1
    );
  };
  
  // Function to go to previous slide/group
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      // Agar current index 0 hai, toh pichla group last group banega
      prevIndex === 0 ? pets.length - visibleCount : prevIndex - 1
    );
  };

  // For swipe functionality, store initial touch position in a variable
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50; // Minimum distance to detect swipe
    if (touchStartX - touchEndX > swipeThreshold) {
      nextSlide();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <div className="w-full  flex flex-col items-center bg-[#F7F7F7]">
      <h2 className="text-[35px] mt-24 noto-sans-kr-bold mb-12 w-[280px] h-[55px]">
        입주를 환영합니다
      </h2>
      <div className="flex gap-4 mb-40">
         {/* Left Button */}
      <button
            className="hidden md:flex items-center justify-center z-10 rounded-2xl"
            onClick={prevSlide}
          >
            <Image src={"/pet-images/left.svg"} width={19} height={33} alt="left" />
          </button>
      <div className="relative  ">
    
        <div className="relative w-[891px] h-[231px] mx-auto overflow-hidden md:flex md:items-center hidden">                  
          {/* Image carousel */}
          <div
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 204}px)`, // Move images by 1 image
            }}
          >
            {pets.map((pet) => (
              <div key={pet.id} className="flex-shrink-0">
                <Image
                  src={pet.image || "/placeholder.svg"}
                  alt={pet.name}
                  width={200}
                  height={231}
                  className="rounded-lg object-cover"
                />
                <div className="flex text-center justify-center text-[16px] noto-sans-kr-bold">{pet.name}</div>
              </div>
            ))}
          </div>

         
        </div>
        

        {/* Mobile View */}
        <div
          className="md:hidden grid grid-cols-2 gap-4"
          onTouchStart={(e) => (this.touchStart = handleTouchStart(e))}
          onTouchEnd={(e) => handleTouchEnd(e, this.touchStart)}
        >
          {pets.map((pet) => (
            <div key={pet.id}>
              <Image
                src={pet.image || "/placeholder.svg"}
                alt={pet.name}
                width={169.59}
                height={169.59}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
       {/* Right Button */}
       <button
            className="hidden md:flex "
            onClick={nextSlide}
          >
            <Image src={"/pet-images/right.svg"} width={19} height={33} alt="right" />
          </button>
          </div>
    </div>
  );
}