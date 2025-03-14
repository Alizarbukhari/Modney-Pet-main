// SlideOne.js
import React, { useState } from 'react';
import Image from 'next/image';
import bg1 from '@/public/bg1.png'
import bg2 from '@/public/bg2.png'
import bg3 from '@/public/bg3.png'

const SlideZero = ({label, index}) => {

    const [activeBg, setActiveBg] = useState([bg1.src, bg2.src, bg3.src])

    const bg = activeBg[index]
    
    return (
    <div
        className={`flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat text-center`}
        style={{ backgroundImage: `url(${bg})` }}
    >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex flex-col">
            <h2 className="text-8xl font-bold text-white">Styleish Life</h2>
            <p className="text-2xl text-white font-[500] mt-8">This is the content for the first slide.</p>
            </div>
        </div>
    );
};

export default SlideZero;
