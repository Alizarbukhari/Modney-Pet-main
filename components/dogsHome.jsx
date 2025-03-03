"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Function to fetch pet data from the backend API
const fetchPetsData = async () => {
  try {
    // Make the fetch request to your backend API endpoint
    const response = await fetch('/api/test'); // Replace with your actual endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // If you want to log the fetched data
    console.log(data);
    return data.data; // Assuming data contains 'data' array with pet info

  } catch (error) {
    // Handle any errors that occurred during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  }
};

export default function Dogshome() {
  const [pets, setPets] = useState([]); // State to store fetched pets data
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  // Fetch pets data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const petsData = await fetchPetsData();
      if (petsData) {
        setPets(petsData);
      }
    };

    fetchData();
  }, []); // Empty array means this runs only once when the component mounts

  // Function to go to next slide/group
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= pets.length - visibleCount ? 0 : prevIndex + 1
    );
  };

  // Function to go to previous slide/group
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
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
    <div className="w-full flex flex-col items-center bg-[#F7F7F7]">
      <h2 className="text-[35px] mt-24 text-center noto-sans-kr-bold mb-12 w-[280px] h-[55px]">
        입주를 ᄒጓᆫ영합니다
      </h2>
      <div className="flex gap-4 mb-40">
        {/* Left Button */}
        <button
          className="hidden md:flex items-center justify-center z-10 rounded-2xl"
          onClick={prevSlide}
        >
          <Image src={"/pet-images/left.svg"} width={19} height={33} alt="left" />
        </button>

        <div className="relative">
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
                    src={pet.imageName || "/placeholder.svg"} // Image from fetched data
                    alt={pet.dog_name} // Dog name from fetched data
                    width={200}
                    height={231}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex text-center justify-center text-[16px] noto-sans-kr-bold">
                    {pet.dog_name} {/* Display dog name from fetched data */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div
            className="md:hidden grid grid-cols-2 gap-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {pets.map((pet) => (
              <div key={pet.id}>
                <Image
                  src={pet.imageName || "/placeholder.svg"} // Image from fetched data
                  alt={pet.dog_name} // Dog name from fetched data
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
