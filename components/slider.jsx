// components/slider.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './slider.css';
import SlideZero from './page/page0';

const FullPageSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);
    const paginationRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && paginationRef.current) {
            swiperRef.current.params.pagination.el = paginationRef.current;
            swiperRef.current.pagination.init();
            swiperRef.current.pagination.update();
        }
    }, []);

    return (
        <>
            <div className="pagination-container absolute flex justify-center  left-28 bottom-14 items-end z-20 text-white">
                
                <div className="swiper-button-prev cursor-pointer "></div>
                <div ref={paginationRef} className="custom-pagination1 text-white"></div>
                <div className="swiper-button-next cursor-pointer"></div>
                
            </div>


            <div className="h-screen w-screen relative">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={0}
                    slidesPerView={1}
                    speed={2000}
                    onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        type: 'fraction',
                        el: '.custom-pagination1',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    <SwiperSlide><SlideZero label="Home" index={0} /></SwiperSlide>
                    <SwiperSlide><SlideZero label="About" index={1} /></SwiperSlide>
                    <SwiperSlide><SlideZero label="Contact" index={2} /></SwiperSlide>
                </Swiper>

                {/* Custom pagination and navigation */}

            </div>
        </>
    );
};

export default FullPageSlider;
