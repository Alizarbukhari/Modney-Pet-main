"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Dogshome() {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6); // Default to 6 for mobile view
  const initialVisibleCountMobile = 6; // Mobile count

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
        setVisibleCount(petsData.length); // Show all pets on desktop
      }
    };

    updateVisibleCount(); // Set initial count based on current window size
    window.addEventListener('resize', updateVisibleCount); // Update count on window resize

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, [petsData.length]);

  const getAge = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    return age;
  };

  // Handle load more button click to show more pets
  const loadMorePets = () => {
    if (visibleCount + initialVisibleCountMobile <= petsData.length) {
      setVisibleCount(visibleCount + initialVisibleCountMobile); // Increase the visible count for mobile
    } else {
      setVisibleCount(petsData.length); // Show all remaining pets
    }
  };

  // Touch handlers for mobile
  let touchStartX = 0;
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      // Swipe left
    } else if (touchEndX - touchStartX > swipeThreshold) {
      // Swipe right
    }
  };

  // Settings for react-slick
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  // Custom arrows for the slider
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10" onClick={onClick}>
        <Image src={"/pet-images/right.svg"} width={19} height={33} alt="right" />
      </button>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10" onClick={onClick}>
        <Image src={"/pet-images/left.svg"} width={19} height={33} alt="left" />
      </button>
    );
  }

  if (loading) {
    return <div>Loading pets...</div>;
  }

  if (!petsData || petsData.length === 0) {
    return <div>No pets found</div>;
  }

  return (
    <div className="w-full flex flex-col items-center bg-[#F7F7F7] justify-center md:h-[678px]">
      <div className="w-full max-w-[1000px] px-4 my-20">
        <div className="text-black text-center font-[900] noto-sans-kr-bold text-[20px] md:text-[38px] mb-[60px]">입주를 환영합니다</div>
        
        {/* Desktop View with react-slick */}
        <div className="hidden md:block">
          <Slider {...sliderSettings}>
            {petsData.map((pet, index) => (
              <div key={index} className="px-3">
                <div className="flex flex-col items-center">
                  <div className="w-[200px] h-[200px] relative">
                    <Image
                      src={`/product_image/${pet.imageName}`}
                      alt={pet.dog_name}
                      fill
                      className="rounded-lg object-cover"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="mt-2 text-center text-[16px] noto-sans-kr-bold">
                    {`${pet.dog_name} / ${getAge(pet.dog_date_of_birth)}살`}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile View Grid */}
        <div className="md:hidden grid grid-cols-2 gap-2"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}>
          {petsData.slice(0, visibleCount).map((pet, index) => (
            <div key={index}>
              <div className="h-[169px] w-[169.59px]">
                <Image
                  src={`/product_image/${pet.imageName}`}
                  alt={pet.dog_name}
                  width={169.59}
                  height={169.59}
                  className="rounded-lg w-full h-full"
                />
              </div>
              <div className="flex text-center justify-center text-[16px] noto-sans-kr-bold">
                {`${pet.dog_name} / ${getAge(pet.dog_date_of_birth)}살`}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button for Mobile */}
        <div className="w-full flex justify-center md:hidden mt-14 noto-sans-kr">
          <button 
            className="w-[94px] h-[21px] text-[14px] bg-white border-[1px] border-black"
            onClick={loadMorePets}>
            더보기
          </button>
        </div>
      </div>
    </div>
  );
}
