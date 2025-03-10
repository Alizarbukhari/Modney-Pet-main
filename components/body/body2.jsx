import React from 'react'
import Button from './button'
import Image from 'next/image'
import Body2_Content from './body2_content'

export default function Body2() {
  const Body_Content =[{
    id:1,
    title: "사전 점검 및 확인",
    T1:"제품 상태 확인",
    p1:"하우스백 사용 전, 제품 상태와 구성품을 다시 한번 확인하세요.",
    T2:"점검 체크리스트",
    p2:"사전 점검 체크리스트를 통해 완벽한 입주 준비 완료! ",
    T3:"전담 서비스",
    p3:"예상치 못한 하자나 문제를 신속히 해결할 수 있는 전담 서비스를 .",
    
  },
  {
    id: 2,
    title: "입주 준비",
    T1: "입주 일정 확인",
    p1: "입주 일정을 확인하고 필요한 준비를 완료하세요.",
    T2: "가구 배치",
    p2: "가구 배치를 미리 계획하여 공간을 효율적으로 활용하세요.",
    T3: "유틸리티 설정",
    p3: "전기, 가스, 수도 등 유틸리티 서비스를 설정하세요.",
  },
  {
    id: 3,
    title: "입주 준비",
    T1: "입주 일정 확인",
    p1: "입주 일정을 확인하고 필요한 준비를 완료하세요.",
    T2: "가구 배치",
    p2: "가구 배치를 미리 계획하여 공간을 효율적으로 활용하세요.",
    T3: "유틸리티 설정",
    p3: "전기, 가스, 수도 등 유틸리티 서비스를 설정하세요.",
  },{
    id:4,
    title: "사전 점검 및 확인",
    T1:"제품 상태 확인",
    p1:"하우스백 사용 전, 제품 상태와 구성품을 다시 한번 확인하세요.",
    T2:"점검 체크리스트",
    p2:"사전 점검 체크리스트를 통해 완벽한 입주 준비 완료! ",
    T3:"전담 서비스",
    p3:"예상치 못한 하자나 문제를 신속히 해결할 수 있는 전담 서비스를 .",
    
  }]
  return (
    <div className='md:w-[95%] w-[100%] border-t md:border-[2px] border-[#A5A5A5] bg-[#FFFCF3]'>
        {/* button div */}
        <div><Button title="하우스 오너"/></div>
        {/* content div */}
        <div className='w-full h-full mt-4 md:mt-0 flex justify-center items-center '>
            {/* main div */}
          <div className='md:w-[70%] w-[90%] flex flex-col my-[100px]'>
          <div className='md:text-[45px] text-[30px] text-center noto-sans-kr-bold  pb-8 border-[#DDDDDD] border-b-2'>하우스백 입주절차안내</div>
          <div className='body2_content-wrapper '>
             {/* Map through Body_Content and pass each object to Body2_Content */}
          {Body_Content.map((item) => (
            <Body2_Content
              key={item.id} // Unique key for each item
              id={item.id}
              title={item.title}
              T1={item.T1}
              p1={item.p1}
              T2={item.T2}
              p2={item.p2}
              T3={item.T3}
              p3={item.p3}
            />
          ))}
          </div>
         
          </div>
        </div>
       
        
    </div>
  )
}
