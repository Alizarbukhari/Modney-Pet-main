import { HiCalendarDays } from "react-icons/hi2";

export default function Body_Form_Content() {
  return (
    <>
     {/* form main div */}
     <div className='md:w-[43%] w-full flex flex-col gap-[40px]'>
                {/* 1st input */}
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] font-bold'>아이디</div>
                    <input type="text" placeholder='이름을 입력해주세요.'
                    className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]'/>
                </div>
                {/* 2nd input */}
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] font-bold'>비밀번호</div>
                    <input type="text" placeholder='비밀번호를 입력해주세요.'
                    className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]'/>
                </div>
                {/* 3rd input */}
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] font-bold'>비밀번호 확인</div>
                    <input type="text" placeholder='비밀번호 확인을 위해 다시 입력하세요.'
                    className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]'/>
                </div>
                {/* 4th input */}
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] font-bold'>강아지 사진</div>
                    <input type="text" placeholder='이메일을 입력해주세요.'
                    className='w-full md:h-[195px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]'/>
                </div> 
                {/* 5th iputs */}
                <div className='flex  w-full justify-between'>
                <div className='flex flex-col gap-[20px]'>  
                    <div className='md:text-[23px] text-[12px]  font-bold'>강아지 이름</div>
                    <input type="text" placeholder='이름을 입력하세요.'
                    className='md:w-[299px] w-[170px] md:placeholder:text-[16px] placeholder:text-[11px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7]'/>
                </div>
                {/* 2 */}
                <div className='flex flex-col gap-[20px]'>  
                    <div className='md:text-[23px] text-[12px] font-bold'>강아지 이름</div>
                    <div className='relative '>
                    <input type="text" placeholder='이름을 입력하세요.'
                    className='md:w-[299px] w-[170px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7] md:placeholder:text-[16px] placeholder:text-[11px]'/>
                    <HiCalendarDays className="absolute right-4 md:text-2xl top-1/2 transform -translate-y-1/2 text-gray-400" /></div>

                </div>
                </div>
                {/* 6th input */}
                <div>
                <div className='text-[23px] font-bold'>강아지 사진</div>
               
                <div className="flex justify-between">
                    <div className="w-[30%]  h-[50px]">
                    <input type="text" placeholder='몸무게'
                    className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7]'/>
                    </div>
                    {/* 2 */}
                    <div className="w-[30%]  h-[50px]">
                    <input type="text" placeholder='체고'
                    className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7]'/>
                    </div>
                    {/* 3 */}
                    <div className="w-[30%]  h-[50px]">
                    <input type="text" placeholder='등길이'
                    className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7]'/>
                    </div>
                </div>
                </div>
            </div>
    </>
  )
}
