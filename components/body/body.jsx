import React from 'react'
import Button from './button'
import Body1 from './body1'
import Body2 from './body2'
import Body3 from './body3'
import Body_Form from './body_form'
import Image from "next/image";


const vectorImages = [

  "/vectorImages/vector1.png",
  "/vectorImages/vector5.png",
  "/vectorImages/vector4.png",
  "/vectorImages/vector2.png",
  "/vectorImages/vector.png",
  "/vectorImages/vector3.png",



]

export default function Body() {
  return (
    <>
      <div className='w-[100%]  flex flex-col justify-center items-center bg-[#FFFCF3]'>
        {/* div 1 */}
        <div className='md:w-[95%] h-[400px] md:h-[531px] w-[100%]   border-t-2 md:border-[2px] border-[#A5A5A5] md:mt-8'>
          {/* black button */}
          <Button title="모드니펫" />
          {/* center content */}
          <div className='w-full  flex justify-center items-center'>
            {/* cotent div */}
            <div className='w-[90%] mt-12 md:mt-16  flex flex-col justify-center items-center'>
              <div className='flex flex-col  md:gap-7 justify-center items-center'>
                {/* title */}
                <div className="flex   flex-wrap gap-2 justify-center items-center ">
                  {vectorImages.map((src, index) => (
                    <div key={index} className="md:w-[55px] w-[32px] h-[32px] md:h-[55px]">
                      <Image src={src} alt={`Vector ${index + 1}`} width={55} height={55} className='h-full w-full' />
                    </div>
                  ))}
                </div>
                {/* paragraph */}
                <div className='flex flex-col justify-center noto-sans-kr items-center mt-6 text-[16px] fontweight: 700;'>
                  <p>안녕하세요.</p>
                  <p className='mt-6'> <span className='noto-sans-kr-bold '>하우스백 시리즈</span>를 구입해주셔서</p>
                  <p>진심으로 감사합니다.</p>
                  <p className='mt-6'>모드니펫은  반려동물 이동가방에서 나아가 </p>
                  <p className='noto-sans-kr-bold  '>반려동물 주거환경 개선을 통해</p>
                  <p className='noto-sans-kr-bold text-[15px] '>보호자와 반려동물의 공존을 노력하는 브랜드입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* div 2 */}
        <Body1 />
        <Body2 />
        <Body3 />
        <Body_Form /> 

      </div>

    </>
  )
}