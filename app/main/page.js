import React from 'react'
import MainPic from '@/components/main/main'
import Footer2 from '@/components/Footer2'
import Body from '@/components/body/body'


function Main() {

  return (
      // main div
    <div className='bg-[#FFFCF3]' >
      {/* header */}
    <div><MainPic/></div>
    <div className="mb-5 bg-[#FFFCF3]">

    <Body/>
</div>
       {/* Footer */}
 

    <Footer2/>

    
    </div>

  )
}

export default Main