import React from 'react'
import MainPic from '@/components/main/main'
import Footer2 from '@/components/Footer2'
import Body from '@/components/body/body'


function Main() {

  return (
      // main div
    <div >
      {/* header */}
    <div><MainPic/></div>
    <Body/>

       {/* Footer */}
       <Footer2/>
    
    </div>

  )
}

export default Main