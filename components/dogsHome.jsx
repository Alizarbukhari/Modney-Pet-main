import React, { useState } from "react";
import Image from "next/image";

const pets = [
  { id: 1, image: "/pet-images/pet1.png", name: "Golden Puppy" },
  { id: 2, image: "/pet-images/pet2.png", name: "Brown Dog" },
  { id: 3, image: "/pet-images/cat.png", name: "Grey Cat" },
  { id: 4, image: "/pet-images/pet3.png", name: "White Dog" },
  { id: 5, image: "/pet-images/pet4.png", name: "Black Cat" },
  { id: 6, image: "/pet-images/pet5.png", name: "Black Cat" },
];

export default function Dogshome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // Loop back to start if currentIndex reaches the end
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pets.length);
  };

  const prevSlide = () => {
    // Loop back to the last image if currentIndex is at the beginning
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pets.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    // Store initial touch position for swipe detection
    const touchStart = e.touches[0].clientX;
    return touchStart;
  };

  const handleTouchEnd = (e, touchStart) => {
    // Detect swipe direction and update the index accordingly
    const touchEnd = e.changedTouches[0].clientX;
    const swipeThreshold = 50; // Minimum swipe distance to trigger change
    if (touchStart - touchEnd > swipeThreshold) {
      nextSlide();
    } else if (touchEnd - touchStart > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <div className="w-full h-[687px] flex flex-col items-center bg-[#F7F7F7]">
      <h2 className="text-[35px] noto-sans-kr-bold mb-12 w-[280px] h-[55px]">
        입주를 환영합니다
      </h2>

      <div className="relative">
        <div className="relative w-[891px] h-[231px] mx-auto overflow-hidden md:flex md:items-center hidden">
          {/* Left Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full"
            onClick={prevSlide}
          >
            <Image src={"/pet-images/left.svg"} width={19} height={33} alt="left" />
          </button>

          {/* Image carousel */}
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 204}px)`, // Move images by 1 image
            }}
          >
            {pets.map((pet) => (
              <div key={pet.id} className="flex-shrink-0">
                <Image
                  src={pet.image || "/placeholder.svg"}
                  alt={pet.name}
                  width={199.87}
                  height={231}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full"
            onClick={nextSlide}
          >
            <Image src={"/pet-images/right.svg"} width={19} height={33} alt="right" />
          </button>
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
    </div>
  );
}
