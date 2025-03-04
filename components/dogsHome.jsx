"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Dogshome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const visibleCount = 4;

  // Fetch data from API and filter valid pets
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('/api/get_images'); // API endpoint path
        const data = await response.json();
        if (data.data) {
          // Filter: Only those pets jinke dog_name aur imageName dono valid (non-null) hon
          const validPets = data.data.filter(pet => pet.dog_name !== null && pet.imageName !== null);
          setPetsData(validPets);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPets();
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev >= petsData.length - visibleCount ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? petsData.length - visibleCount : prev - 1
    );
  };

  // Touch handlers
  let touchStartX = 0;
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      nextSlide();
    } else if (touchEndX - touchStartX > swipeThreshold) {
      prevSlide();
    }
  };

  if (loading) {
    return <div>Loading pets...</div>;
  }

  if (!petsData || petsData.length === 0) {
    return <div>No pets found</div>;
  }

  return (
    <div className="w-full flex flex-col items-center bg-[#F7F7F7]">
      {/* Carousel Header and Container */}
      <div className="flex gap-4 mb-40">
        {/* Left Button */}
        <button className="hidden md:flex items-center justify-center z-10 rounded-2xl" onClick={prevSlide}>
          <Image src={"/pet-images/left.svg"} width={19} height={33} alt="left" />
        </button>

        <div className="relative">
          {/* Desktop View Carousel */}
          <div className="relative w-[891px] h-[231px] mx-auto overflow-hidden md:flex md:items-center hidden">                  
            <div className="flex gap-6 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 204}px)` }}>
              {petsData.map((pet, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={`/product_image/${pet.imageName}`}
                    alt={pet.dog_name}
                    width={200}
                    height={231}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex text-center justify-center text-[16px] noto-sans-kr-bold">
                    {pet.dog_name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View Carousel */}
          <div className="md:hidden grid grid-cols-2 gap-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            {petsData.map((pet, index) => (
              <div key={index}>
                <Image
                  src={`/product_image/${pet.imageName}`}
                  alt={pet.dog_name}
                  width={169.59}
                  height={169.59}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button className="hidden md:flex" onClick={nextSlide}>
          <Image src={"/pet-images/right.svg"} width={19} height={33} alt="right" />
        </button>
      </div>
    </div>
  );
}
