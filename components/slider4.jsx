// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import contents5th from '@/constants/5th';
import './slider3.css'


const slider4 = () => {

    const [progress, setProgress] = useState(0)
    return (
        <div> 
            <Swiper
                slidesPerView={1.8}
                rewind={true}
                spaceBetween={40}
                onProgress={(swiper, progress) => setProgress(progress)}

            >
                {contents5th.map((content, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-[500px] h-[300px] relative'>
                            <Image
                                src={content.image}
                                alt={content.title}
                                layout='fill' // Use fill to cover the container
                                objectFit='cover' // Ensure the image covers the container
                            />
                        </div>
                        <h3 className='text-[1.2em] text-center font-[600] mt-4'>{content.title}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="relative  mt-20 mb-20 bottom-0 left-0 w-full h-1 bg-gray-300">
                <div
                    className="h-full bg-[#961E1E]"
                    style={{ width: `${progress * 100}%` }}
                ></div>
            </div>
        </div>
    )
}

export default slider4;