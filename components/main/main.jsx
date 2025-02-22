import React from 'react'
import Image from 'next/image'


import MainHeader from '@/components/mainheader'

export default function MainPic() {
  return (
    <div>
      <MainHeader />
      <div className="hidden md:block md:w-full md:h-[950px]">
        <Image 
          src="/main/HouseMain.png"
          alt="Picture of the Kutta"
          width={1920}
          height={950}
          className="w-full h-full"
        />
        <p></p>

      </div>
      

      <div className="md:hidden w-full h-[700px]">
        <Image 
          src="/main/wdog.png"
          alt="Picture of the Kutta"
          width={390}
          height={700}
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
