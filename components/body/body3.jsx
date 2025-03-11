import React from 'react'
import Button from './button'
import Image from 'next/image'
import Body2_Content from './body2_content'

export default function Body3() {
 
  return (
    <div className='md:w-[95%] w-full md:h-[745px] h-auto   md:border-[2px] border-t md:border-t-0 border-[#A5A5A5] bg-[#FFFCF3]'>
        {/* button div */}
        <div><Button title="하우스 오너"/></div>
        {/* content div */}
        <div className='w-full h-full flex flex-col justify-center py-10 md:py-0 items-center gap-[30px]'>
            <div className='md:text-[45px] text-[24px]   noto-sans-kr-bold text-center'>하우스백 사용방법</div>
            <div><p className='md:text-[30px] text-[13px] noto-sans-kr text-center'>하우스백 사용으로 집의 다양한 공간과 기능을 제어하여<br/>
            편리하고 안전한 생활이 가능합니다.</p></div>
            <div><button className='md:h-[63px] md:w-[283px] md:text-[21px] text-[#333333] noto-sans-kr-bold text-[12px] text-center py-[8px] w-[140px] bg-[#FFC800] border-[2px] border-[#000000]'>하우스백 사용법 PDF</button></div>
        </div>
       
        
    </div>
  )
}
