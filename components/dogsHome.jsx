"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Dogshome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6); // Default to 6 for mobile view
  const initialVisibleCountMobile = 6; // Mobile count
  const initialVisibleCountDesktop = 4; // Desktop count

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

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(initialVisibleCountMobile); 
      } else {
        setVisibleCount(initialVisibleCountDesktop); // Set visibleCount to 4 for desktop
      }
    };

    updateVisibleCount(); // Set initial count based on current window size
    window.addEventListener('resize', updateVisibleCount); // Update count on window resize

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateVisibleCount);
    };
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

  const getAge = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    return age;
  };

  // Handle load more button click to show more pets
  const loadMorePets = () => {
    if (visibleCount + initialVisibleCountDesktop <= petsData.length) {
      setVisibleCount(visibleCount + initialVisibleCountDesktop); // Increase the visible count by 4 (for desktop)
    } else {
      setVisibleCount(petsData.length); // Show all remaining pets if less than 4
    }
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
    <div className="w-full flex flex-col items-center bg-[#F7F7F7] justify-center md:h-[678px]">
      {/* Carousel Header and Container */}
      <div className="flex gap-4  my-20">
        {/* Left Button */}
        <button className="hidden md:flex  items-center justify-center mr-4 z-10 mt-[104px] " onClick={prevSlide}>
          <Image src={"/pet-images/left.svg"} width={19} height={33} alt="left" />
        </button>

        <div className="relative">
          <div className="text-black text-center font-[900] noto-sans-kr-bold text-[20px] md:text-[38px] mb-[98px]">입주를 환영합니다</div>
          {/* Desktop View Carousel */}
          <div className="relative w-[891px] mx-auto overflow-hidden md:flex md:items-center hidden">

            <div className="flex gap-6 transition-transform duration-300 ease-in-out"

              style={{ transform: `translateX(-${currentIndex * 204}px)` }}>
              {petsData.slice(0, visibleCount).map((pet, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={`/product_image/${pet.imageName}`}
                    alt={pet.dog_name}
                    width={200}
                    height={231}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex text-center justify-center text-[16px] noto-sans-kr-bold">
                    {`${pet.dog_name} (${getAge(pet.dog_date_of_birth)}살)`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View Carousel */}
          <div className="md:hidden grid grid-cols-2 gap-2 "
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            {petsData.slice(0, visibleCount).map((pet, index) => (
            <div key={index} >  <div className="h-[169px] w-[169.59px]">
                <Image
                  src={`/product_image/${pet.imageName}`}
                  alt={pet.dog_name}
                  width={169.59}
                  height={169.59}
                  className="rounded-lg w-full h-full"
                />
               
              </div> <div className="flex text-center justify-center text-[16px] noto-sans-kr-bold">
                    {`${pet.dog_name} /(${getAge(pet.dog_date_of_birth)})살`}
                  </div>
              
              </div>))}
            
          </div>

          {/* Load More Button */}
          <div className="w-full flex justify-center  md:hidden mt-14 noto-sans-kr  ">
            <button className="w-[94px] h-[21px] text-[14px] bg-white border-[1px]  border-black"
              onClick={loadMorePets}>
              더보기
            </button>
          </div>
        </div>

        {/* Right Button */}
        <button className="hidden md:flex mt-[104px]" onClick={nextSlide}>
          <Image src={"/pet-images/right.svg"} width={19} height={33} alt="right" />
        </button>
      </div>
    </div>
  );
}
