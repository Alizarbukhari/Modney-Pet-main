import React from 'react'

export default function Button(props) {
  return (
    <>
    <div className='w-[107px] md:w-189 md:h-[48.51px] h-[32px] flex justify-center items-center text-white  bg-black'>{props.title}</div>
    </>
  )
}
