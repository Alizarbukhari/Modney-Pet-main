import React from 'react'
import Button from './button'
import Image from 'next/image'

export default function Body1() {
  return (
    <div className='w-[95%] md:h-[1284px] h-auto border-b border-t md:border-[2px] border-[#A5A5A5] bg-[#FFFCF3]'>
        {/* button div */}
        <div><Button title="하우스 오너"/></div>
        {/* content div */}
        <div className='w-full h-full flex justify-center items-center'>
            {/* main div */}
          <div className='w-[90%] h-[967px] flex flex-col justify-center items-center'>
          <div className='md:text-[45px] text-[30px] text-center font-bold'>하우스 오너가 되신 것을 축하드립니다!</div>
          <div className='md:w-[75%] w-full  h-[219px] md:h-[562px] mt-8'>
            <Image
            src="/bodyImages/body1.png"
            width="1000"
            height="1000"
            alt="body Image"
            className='w-full h-full'
            />
            </div>
            {/* paragraph */}
          <div className='flex flex-col justify-center items-center text-center mt-8 text-[18px] fontweight: 700;'>
             <p className='text-[18px]'><span className='font-bold text-[21px]'>하우스백을</span> 선택해 주시고, 소중한 반려동물에게 <span className='font-bold text-[21px]'>특별한 보금자리</span>를 마련해 주셔서 진심으로 감사드립니다.<br/>
             <span className='font-bold text-[21px]'>하우스백은</span>
              단순한 가방이 아닌, <span className='font-bold text-[21px]'> 반려동물과 함께하는 삶을 더욱 편안하고 가치 있게 만들어 줄</span> 공간입니다.<br/>
            저희 모드니펫은 <span className='font-bold text-[21px]'>반려동물이 더 행복하고 의미 있는 시간이</span> 될 수 있도록 늘 함께하겠습니다.<br/>
            다시 한번 축하와 감사의 마음을 전하며, 앞으로도 많은 사랑과 관심 부탁드립니다.
            </p>
             <p className='mt-6'>감사합니다.</p>
             <p className="mt-8 font-extrabold">모드니펫 드림</p>
          </div>
          </div>
        </div>
       
        
    </div>
  )
}
