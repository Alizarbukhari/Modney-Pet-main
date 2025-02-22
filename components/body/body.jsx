import React from 'react'
import Button from './button'
import Body1 from './body1'
import Body2 from './body2'
import Body3 from './body3'
import Body_Form from './body_form'

export default function Body() {
  return (
    <>
    <div className='w-[100%] h-auto flex flex-col justify-center items-center bg-[#FFFCF3]'>
      {/* div 1 */}
        <div className='w-[95%] h-[531px] border-b border-t md:border-[2px] border-[#A5A5A5] mt-8'>
            {/* black button */}
            <Button title="모드니펫"/>
            {/* center content */}
            <div className='w-full h-full flex justify-center items-center'>
                {/* cotent div */}
            <div className='w-[90%] h-[347px] flex flex-col justify-center items-center'>
               <div className='flex flex-col justify-center items-center'>
                    {/* title */}
                 <div>image</div>
                 {/* paragraph */}
                 <div className='flex flex-col justify-center items-center mt-6 text-[16px] fontweight: 700;'>
                    <p>안녕하세요.</p>
                    <p className='mt-6'> <span className='font-bold'>하우스백 시리즈</span>를 구입해주셔서</p>
                    <p>진심으로 감사합니다.</p>
                    <p className='mt-6'>모드니펫은  반려동물 이동가방에서 나아가 </p>
                    <p className='font-bold'>반려동물 주거환경 개선을 통해</p>
                    <p className='font-bold'>보호자와 반려동물의 공존을 노력하는 브랜드입니다.</p>
                 </div>
               </div>
            </div>
            </div>
        </div>
        {/* div 2 */}
          <Body1/>
          <Body2/>
          <Body3/>
          <Body_Form/>
        


    </div>
    
    </>
  )
}