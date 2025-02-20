import React, { useState } from 'react';
import contents6th from '@/constants/6th';
import bg1 from '@/public/bg1.png';

function Slide5() {

  const [hoverIndex, setHoverIndex] = useState(1);
  const bg = hoverIndex !== null ? contents6th[hoverIndex].image : null;

  return (
    <div className={`h-[100vh] w-full relative flex transition-all duration-1000 ease-in-out`} 
    style={{
        backgroundImage: bg ? `url(${bg.src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: hoverIndex !== null ? 'scale(1.05)' : 'scale(1)',
      }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {contents6th.map((content, index) => (
        <div
          onMouseEnter={() => {
            setHoverIndex(index);
            console.log(index);
          }}
          key={index} // Add a key to each mapped element
          className={`w-full h-full border-r flex justify-center items-center border-white/30 ${index === 0 ? 'border-l' : ''} relative z-20 group`}
        >
        <div className='flex flex-col'>
            <h3 className='text-[2.5em] cursor-pointer font-[800] text-white/50 group-hover:text-white group-hover:text-[3em] transition-all duration-300'>
              {content.title}
            </h3>
            <h4 className='text-[1.2em] font-[700] text-white/50 group-hover:text-white group-hover:text-[1.5em] transition-all duration-300'>
              {content.description}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slide5;