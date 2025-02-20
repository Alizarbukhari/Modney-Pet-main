import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, useSwiper, Mousewheel, Navigation } from 'swiper/modules';

// Import your slide components
import SlideOne from '@/components/page/page1';


const FullPageSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null); // Create a reference for the Swiper instance

    // Custom labels for each slide
    const slideLabels = ["Home", "About", "Contact"];

    return (
        <div className="h-screen w-screen relative">

            <div className="text-center text-white text-4xl mt-32 ml-32 font-bold absolute z-10 flex justify-center space-x-4">
                {slideLabels.map((label, index) => (
                    <div
                        key={index}
                        className={`${index === activeSlide ? "opacity-100 border-b-4 border-white" : "opacity-40"
                            } transition-opacity duration-500 cursor-pointer pb-2`}
                        onClick={() => swiperRef.current.slideTo(index)}
                    >
                        {label}
                    </div>
                ))}
            </div>


            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Store the swiper instance in the ref
                slidesPerView={1}
                speed={2000}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                

            >

                {slideLabels.map((label, index) => (
                    <SwiperSlide key={index}><SlideOne label={label} index={index} /></SwiperSlide>
                ))}


                {/* Custom pagination container */}
                <div className="custom-pagination absolute bottom-10 w-full flex justify-center space-x-4 z-20"></div>
            </Swiper>

        </div>
    );
};

export default FullPageSlider;
