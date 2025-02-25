"use client";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Body2_Content(props) {
  const [isSlideOpen, setIsSlideOpen] = useState(false); // Default close on desktop

  // Mobile: Always open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSlideOpen(true); 
      } else {
        setIsSlideOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check size on mount

    return () => window.removeEventListener('resize', handleResize); // Clean up on unmount
  }, []);

  const toggleSlide = () => {
    setIsSlideOpen(!isSlideOpen);
  };

  return (
    <div className="w-full md:px-[200px] py-6 border-[#DDDDDD] border-t-2 bg-[#FFFCF3]">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 ">
          <div className="md:text-[85px] text-[24px] noto-sans-kr-bold">{props.id}</div>
          <p className="md:text-[35px] text-[16px] noto-sans-kr-bold">{props.title}</p>
        </div>
        {/* Icon - Hidden on Mobile, Visible on Desktop */}
        <div
          onClick={toggleSlide}
          className="hidden md:block cursor-pointer"
        >
          <FaChevronDown
            className={`text-[30px] text-[#606060] transition-transform duration-300 ${
              isSlideOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Slide Content - Always Open on Mobile, Collapsible on Desktop */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isSlideOpen ? "max-h-[500px]" : "max-h-0"
        }`}
       
      >
        <div className="">
          <div className="flex flex-col md:flex-row md:gap-4 mx-[20px] md:mx-[54px]">
            <h2 className="md:text-2xl text-[14px] noto-sans-kr-bold md:mb-4 w-[210px]">{props.T1}</h2>
            <p className="md:text-[18px] noto-sans-kr text-[#666666] text-[12px] mb-4">
              {props.p1}
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-col md:flex-row md:gap-4 mx-[20px] md:mx-[52px]">
            <h2 className="md:text-2xl text-[14px] noto-sans-kr-bold md:mb-4 w-[210px]">{props.T2}</h2>
            <p className="md:text-[18px] noto-sans-kr text-[#666666] text-[12px] mb-4">
            {props.p2} </p>
          </div>
          {/* 3 */}
          <div className="flex flex-col md:flex-row md:gap-4 mx-[20px] md:mx-[52px]">
            <h2 className="md:text-2xl text-[14px] noto-sans-kr-bold md:mb-4 w-[210px]">{props.T3}</h2>
            <p className="md:text-[18px] noto-sans-kr text-[#666666] text-[12px] mb-4">
            {props.p3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}