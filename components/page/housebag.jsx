import React from 'react'
import Image from 'next/image'

function Warn() {
  return (
    <>
    
    <div className="flex flex-col gap-8 py-14 border-t-[1px] border-[#DDDDDD]">
      <div className="h-20 w-20 rounded-full border-4 border-black bg-[#D9D9D9]">
        <Image src="/bg1.png"  className="rounded-[100%]" alt="housebag" width={80} height={80}></Image>
      </div>
      
      <h2 className="text-3xl">크기</h2>
      <ul className="text-[#666666] flex flex-col gap-[2px] text-lg list-inside list-disc">
        <li className='text-[1rem]'>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</li>
        <li className='text-[1rem]'>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</li>
        <li className='text-[1rem]'>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</li>
        <li className='text-[1rem]'>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</li>
      </ul>
    </div>

    </>
  )
}

function Warn2() {
  return (
    <>
    
    <div className="flex flex-col gap-8 py-14 border-t-[1px] border-[#DDDDDD]">
      <div className="h-20 w-20 rounded-full border-4 border-black bg-[#D9D9D9]">
        <Image src="/bg1.png"  className="rounded-[100%]" alt="housebag" width={80} height={80}></Image>
      </div>
      
      <h2 className="text-3xl">크기</h2>
      <ul className="text-[#666666] flex flex-col gap-[2px] text-lg list-inside list-disc">
        <li className='text-[1rem]'>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</li>
        <li className='text-[1rem]'>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</li>
        <li className='text-[1rem]'>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</li>
      </ul>
    </div>

    </>
  )
}

function Housebag() {
  return (

    <>
      <section className="container mx-auto gap-40 items-center flex-col relative flex py-40">
        <div className="text-[2.5em] font-[900] text-center leading-[1.2]">
          하우스백
          <h3 className="text-[2.5rem] font-[900] text-center mb-[-6rem]">사용시 주의사항</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-x-40 w-[75%]">
          <Warn></Warn>
          <Warn2></Warn2>
          <Warn></Warn>
          <Warn></Warn>
          <Warn2></Warn2>
          <Warn></Warn>


        </div>
      </section>

    </>

  )
}

export default Housebag
