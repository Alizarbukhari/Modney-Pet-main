import React from 'react'
import Button from './button'
import Image from 'next/image'

export default function Body1() {
  return (
    <div className='w-[100%] flex justify-center items-center '>
  <div className='md:w-[95%] w-[100%] md:h-[1284px] h-auto border-t-2 md:border-t-0  md:border-x-2 border-[#A5A5A5] bg-[#FFFCF3]'>
        {/* button div */}
        <div><Button title="하우스 오너"/></div>
        {/* content div */}
        <div className='w-full h-full flex justify-center items-center'>
            {/* main div */}
          <div className='w-[90%] h-[967px] flex flex-col justify-center   items-center'>
          <div className='md:text-[42px] text-[30px] text-center noto-sans-kr-bold'>하우스 오너가 <br className='md:hidden' /> 되신 것을 축하드립니다!</div>
          <div className='md:w-[997px] w-[350px ]   h-[219px] md:h-[562px] md:mt-8'>
            <Image
            src="/bodyImages/body1.png"
            width="1000"
            height="1000"
            alt="body Image"
            className='w-full h-full'
            />
            </div>
            {/* paragraph */}
          <div className='flex flex-col  px-2  text-center  mt-8 text-[18px]  fontweight: 700;'>
             <p className='md:text-[18px] text-[15px] noto-sans-kr  '>
             <span className='noto-sans-kr-bold '>
             하우스백</span>을 선택해 주시고, 소중한 반려동물에게 <br className='md:hidden' /> <span className='noto-sans-kr-bold '>특별한 보금자리 </span>를 마련해 주셔서 진심으로 감사드립니다. <br />
             </p>
             <p className=' mt-4 md:text-[16.5px] text-[15px] md:mt-0'><span className='noto-sans-kr-bold '>하우스백 </span>은 단순한 가방이 아닌,<span className='noto-sans-kr-bold'> 반려동물과 함께하는 삶을 더욱 편안하고 가치 있게 만들어 줄 공간 </span>입니다.</p>
             <p className='md:text-[18px] text-[15px] noto-sans-kr mt-4 md:mt-0'>
             저희 모드니펫은 반려동물이 <span className='noto-sans-kr-bold'> 더 행복하고 의미 있는 시간 </span>이 될 수 있도록 늘 함께하겠습니다.
             </p>
             <p className='md:text-[18px] text-[15px] noto-sans-kr mt-4 md:mt-0'>다시 한번 축하와 감 사의 마음을 전하며,<br className='md:hidden' /> 앞으로도 많은 사랑과 관심 부탁드립니다.</p>
             <p className='mt-6'>감사합니다.</p>
             <p className="mt-8 noto-sans-kr-bold">모드니펫 드림</p>
          </div>
          </div>
        </div>
       
        
    </div>




    </div>
  )
}
