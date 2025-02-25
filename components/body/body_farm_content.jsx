"use client"
import Image from "next/image";
import { useState } from "react";

export default function Body_Form_Content() {
    const [selectedImage , setSelectedImage] = useState(false)

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file){
            setSelectedImage(URL.createObjectURL(file));
        }
    }
    return (
        <>
            {/* form main div */}
            <div className='md:w-[600px] w-[85%] flex flex-col gap-[40px]'>
                {/* 1st input */}
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] noto-sans-kr'>아이디</div>
                    <input type="text" placeholder='이름을 입력해주세요.'
                        className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                </div>
                {/* 2nd input */}
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] v'>비밀번호</div>
                    <input type="text" placeholder='비밀번호를 입력해주세요.'
                        className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                </div>
                {/* 3rd input */}
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] noto-sans-kr'>비밀번호 확인</div>
                    <input type="text" placeholder='비밀번호 확인을 위해 다시 입력하세요.'
                        className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                </div>
                {/* 4th input */}
                <div className='flex flex-col  gap-[20px]'>
                    <div className='text-[23px] noto-sans-kr'>강아지 사진 4</div>
                    <label    
                     htmlFor="file-upload" 
                    style={{ cursor: 'pointer', display: 'block', marginBottom: '10px', border: '2px solid #D7D7D7',}}
                    className=" flex flex-col  justify-center items-center h-[104px] md:h-[195px]"
                    
                    >
                        {/* Icon */}
                      <div className="md:w-[38px] flex flex-col  md:h-[48px] w-[21px] h-[21px] ">
                      <Image
                            src="/Uploadimg.png" 
                            alt="Upload Icon"
                            height={50}
                            width={50}
                            className=" w-full h-full "
                        />
                      </div>
                      <p className="md:text-[16px] text-[11px] noto-sans-kr ">이미지 업로드</p>

                    </label>
                    <input
                        type="file" 
                        id="file-upload"
                        accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                    />
                    

                </div>
                {/* 5th iputs */}
                <div className='flex  w-full gap-2 justify-between'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='md:text-[23px] text-[12px]  noto-sans-kr'>강아지 이름 </div>
                        <input type="text" placeholder='이름을 입력하세요.'
                            className='md:w-[299px] w-[170px] md:placeholder:text-[16px] placeholder:text-[11px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7]' />
                    </div>
                    {/* 2 */}
                    <div className='flex flex-col gap-[20px]'>
                        <div className='md:text-[23px] text-[12px] noto-sans-kr'>강아지 이름 </div>
                        <div className='relative '>
                            <input type="text" placeholder='이름을 입력하세요.'
                                className='md:w-[299px] w-[170px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7] md:placeholder:text-[16px] placeholder:text-[11px]' />

                            <div className="md:w-[24px] absolute right-3 md:right-7 top-1/2 transform -translate-y-1/2 md:h-[24px] w-[12px] h-[12px] "> <Image
                                src={`/calender.png`}
                                alt="calender"
                                height={12}
                                width={12}
                                className=" w-full h-full "
                            />
                            </div>
                        </div>

                    </div>
                </div>
                {/* 6th input */}
                <div>
                    <div className='text-[23px] noto-sans-kr'>강아지 사진</div>

                    <div className="flex justify-between">
                        <div className="w-[30%]  h-[50px]">
                            <input type="text" placeholder='몸무게'
                                className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7]' />
                        </div>
                        {/* 2 */}
                        <div className="w-[30%]  h-[50px]">
                            <input type="text" placeholder='체고'
                                className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7]' />
                        </div>
                        {/* 3 */}
                        <div className="w-[30%]  h-[50px]">
                            <input type="text" placeholder='등길이'
                                className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7]' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
