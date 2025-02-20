import React from 'react'
import bg2 from '@/public/bg1.png'

function footer() {
  return (
    <div className='h-[100vh] px-20 pt-40 w-full relative' style={{ backgroundImage: `url(${bg2.src})` }}>
        <div className='bg-black opacity-50 absolute inset-0'></div>
        <div className='relative z-10'>
            <h5 className='text-white text-[4em] font-bold'>LIFESTYLE LEADER, HILLSTATE</h5>

            <div className='flex justify-between w-[50%] mt-24'>
                <div className=''>
                    <h6 className='text-white text-[1.5em] font-bold mb-8'>
                        HILLSTATE 
                    </h6>
                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                   
                </div>

                <div className=''>
                    <h6 className='text-white text-[1.5em] font-bold mb-8'>
                        HILLSTATE 
                    </h6>

                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                </div>

                <div className='mt-14'>
                    <h6 className='text-white text-[1.5em] font-bold mb-8'>
                        HILLSTATE
                    </h6>

                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                    <h6 className='text-white/60 text-[1.2em] font-bold mb-2'>
                        HILLSTATE 
                    </h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer