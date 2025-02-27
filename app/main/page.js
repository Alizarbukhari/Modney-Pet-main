import React from 'react'
import MainPic from '@/components/main/main'
import Footer2 from '@/components/Footer2'
import Body from '@/components/body/body'
import Body1 from '@/components/body/body1'
import Body2 from '@/components/body/body2'
import Body3 from '@/components/body/body3'
import Body_Form from '@/components/body/body_form'


function Main() {

  return (
      // main div
    <div className='bg-[#FFFCF3]' >
      {/* header */}
    <div><MainPic/></div>
    <div className='mb-5'>

    <Body/>
    
</div>
       {/* Footer */}
 

     <Footer2/> 

    
    </div>

  )
}

export default Main