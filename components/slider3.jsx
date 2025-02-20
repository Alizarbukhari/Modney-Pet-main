// components/slider3.jsx
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import contents from '@/constants/4th'; // Adjust the path as necessary
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './slider3.css';

const Slider3 = () => {
    const mainSwiperRef = useRef(null);
    const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        if (mainSwiperRef.current) {
            mainSwiperRef.current.slideTo(index);
            setCurrentThumbnailIndex(index);
        }
    };

    return (
        <div className="h-screen w-full relative"> 
            {/* Main Swiper */}
            <Swiper
                modules={[Pagination, Navigation, EffectFade]}
                effect="fade"
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                slidesPerView={1}
                navigation={true}
                className="w-full h-full bg-gray-800 relative"
            >
                {contents.map((content, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="flex items-center justify-center h-full relative"
                            style={{ backgroundImage: `url(${content.image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            {/* Black Overlay */}
                            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                            {/* Text Content */}
                            <div className="relative z-20 text-center text-white p-4">
                                <h2 className="text-[6em] font-[900]">{content.title}</h2>
                                <p className="mt-0 text-[2em] font-[700]">{content.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='absolute z-30 bottom-0 right-0 mb-10'>
                {/* Thumbnail Swiper */}
                <Swiper
                    slidesPerView={2.2}
                    spaceBetween={10}
                    className="w-full max-w-md"
                >
                    {contents.map((thumbContent, thumbIndex) => (
                        <SwiperSlide key={thumbIndex}>
                            <div
                                className={`cursor-pointer border-4 ${currentThumbnailIndex === thumbIndex ? 'border-white' : 'border-transparent'}`}
                                onClick={() => handleThumbnailClick(thumbIndex)}
                            >
                                <img
                                    src={thumbContent.image.src}
                                    alt={`Thumbnail ${thumbIndex + 1}`}
                                    className="w-full h-24 object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider3;