"use client"
import Image from "next/image";
import { useState } from "react";

export default function Body_Form_Content() {
    const [selectedImage, setSelectedImage] = useState(false)

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    }
    return (
        <>
            {/* form main div */}
            <div className='md:w-[600px] h-full w-[90%] mb-16 md:mb-[200px] flex flex-col gap-[35px]'>
                {/* 1st input */}
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] noto-sans-kr-bold'>아이디</div>
                    <input type="text" placeholder='이름을 입력해주세요.'
                        className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                </div>
                {/* 2nd input */}
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] v'>비밀번호</div>
                    <input type="text" placeholder='비밀번호를 입력해주세요.'
                        className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                </div>

                {/* 4th input */}
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] noto-sans-kr-bold'>강아지 사진</div>
                    <label
                        htmlFor="file-upload"
                        style={{ cursor: 'pointer', display: 'block', marginBottom: '10px', border: '2px solid #D7D7D7', }}
                        className=" flex flex-col  justify-center bg-[#F8F8F8] items-center md:w-[600px] w-[280px] h-[104px] md:h-[195px]"

                    >
                        <div className="  flex flex-col  items-center justify-center mt-7 md:mt-12">
                            <div className=" md:w-[38px]  md:h-[48px] w-[21px] h-[21px] ">
                                <Image
                                    src="/Uploadimg.png"
                                    alt="Upload Icon"
                                    height={50}
                                    width={50}
                                    className=" w-full h-full "
                                />
                            </div>
                            <p className="md:text-[16px] text-[#939393]  text-[11px] noto-sans-kr ">이미지 업로드</p>
                        </div>
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
                        <div className='md:text-[23px] text-[12px]  noto-sans-kr-bold'>강아지 이름 </div>
                        <input type="text" placeholder='이름을 입력하세요.'
                            className='md:w-[300px] w-[140px] placeholder:text-start md:placeholder:text-[16px] placeholder:text-[10px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7]' />
                    </div>
                    {/* 2 */}
                    <div className='flex flex-col gap-[20px]'>
                        <div className='md:text-[23px] text-[12px] noto-sans-kr-bold'>강아지 이름 </div>
                        <div className='relative '>
                            <input type="text" placeholder='이름을 입력하세요.'
                                className='md:w-[300px] placeholder:text-start w-[140px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7] md:placeholder:text-[16px] placeholder:text-[10px]' />

                            <div className="md:w-[24px] absolute right-2 md:right-7 top-1/2 transform -translate-y-1/2 md:h-[24px] w-[12px] h-[12px] "> <Image
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
                <div className=" w-[290px] md:w-full ">
                    <div className='text-[23px] noto-sans-kr-bold'>강아지 사진</div>

                    <div className="flex  md:gap-4  gap-1">
                        <div className="md:w-[230px] w-[110px] h-[31px] relative md:h-[50px]">
                            <input type="text" placeholder='몸무게'
                                className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] md:h-[50px] border-[2px] px-2 border-[#D7D7D7]' />
                            <span className="absolute md:text-[16px] text-[11px] noto-sans-kr text-[#939393] md:right-3 right-2 md:mt-3 mt-2"> kg</span>

                        </div>
                        {/* 2 */}
                        <div className="md:w-[230px] w-[110px] h-[31px] relative  md:h-[50px]">
                            <input type="text" placeholder='체고'
                                className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] md:h-[50px] border-[2px] px-2 border-[#D7D7D7]' />
                            <span className="absolute text-[11px] md:text-[16px] noto-sans-kr md:right-3 text-[#939393] md:mt-3 right-2 mt-2"> cm</span>

                        </div>
                        {/* 3 */}
                        <div className="md:w-[230px] w-[110px] h-[31px] relative md:h-[50px]">
                            <input type="text" placeholder='등길이'
                                className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] md:h-[50px] border-[2px] px-2 border-[#D7D7D7]' />

                            <span className="absolute text-[11px] noto-sans-kr md:text-[16px] text-[#939393]  md:right-3 md:mt-3 right-16 mt-2"> kg</span>
                        </div>
                    </div>
                </div>


                {/* 7th input */}
                <div>

                    <div className='flex flex-col gap-[10px]'>
                        <div className='text-[23px] noto-sans-kr-bold'>강아지 견종</div>
                        <input type="text" placeholder='강아지 견종을 입력하세요.'
                            className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                    </div>

                </div>

                {/* 8th input */}

                <div>

                    <div className='flex flex-col gap-[10px]'>
                        <div className='text-[23px] noto-sans-kr-bold'>주소</div>
                        <input type="text" placeholder='주소를 입력하세요.'
                            className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                    </div>

                </div>

                {/* 9th input  */}
                <div className=" flex flex-row gap-4">

                    <div className='flex flex-col gap-[10px]'>
                        <div className='text-[23px] noto-sans-kr-bold'>휴대전화 번호</div>
                        <input type="text" placeholder='01012345678 (-없이)'
                            className='w-[170px] md:w-[443px] md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                    </div>
                    <button className="w-[81px] md:w-[167px] md:h-[50px] md:text-[16px] mt-11 bg-[#333333] h-[31px] noto-sans-kr-bold text-white text-[11px]" > 인증번호 전송 </button>

                </div>

                {/* 10th input  */}

                <div className="flex flex-row  gap-4">

                    <div className="flex flex-row">
                        <div className='flex flex-col gap-[10px]'>
                            <div className='text-[23px] noto-sans-kr-bold'>주소</div>
                            <input type="text" placeholder='주소를 입력하세요.'
                                className='w-[130px] md:w-[349px] md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />

                        </div>
                        <button className="w-[45px] md:w-[90px] md:h-[50px]  noto-sans-kr-bold text-white text-[11px] md:text-[16px] mt-11  bg-[#333333]">
                            확인
                        </button>
                    </div>
                    <button className="w-[86px] md:w-[167px] md:h-[50px] md:text-[16px] mt-11 bg-[#333333] h-[31px] noto-sans-kr-bold text-white text-[11px]" > 재전송</button>


                </div>
                {/* 11th input  */}
                <div className=" flex flex-col gap-[17px]">

                    <div className='flex flex-col gap-[10px]'>
                        <div className='text-[23px] noto-sans-kr-bold'>이메일</div>
                        <input type="text" placeholder='이메일 주소를 입력하세요.'
                            className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                    </div>
                    <div className=" md:text-[17px] text-[8px]  text-[#939393] noto-sans-kr">
                        <p>
                            서비스 알림, 이벤트, 프로모션 등 다양한 정보를 이메일로 전달해드립니다. </p>
                        <p>
                            비밀번호를 잊은 경우 이메일을 통해 발송되기 때문에 입력을 권장합니다. </p>
                    </div>
                </div>
                <div>
                    <div className=" flex  gap-2 ">
                        <div> <input
                            type="checkbox"
                            className="md:h-5 md:w-5 h-[13px] w-[13px] text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        </div>
                        <div className="text-[11px] md:text-[17px] text-[#363940]  noto-sans-kr">
                            <span className="border-b-2 border-[#65B8FD] text-[#65B8FD]">서비스 이용</span> ,
                            <span className="border-b-2 border-[#65B8FD] text-[#65B8FD]">개인정보 수집</span> ,
                            <span className="border-b-2 border-[#65B8FD] text-[#65B8FD]">위치정보</span> 활용 동의</div>
                    </div>
                    <div className=" flex  gap-2 ">
                        <div> <input
                            type="checkbox"
                            className="md:h-5 md:w-5 h-[13px] w-[13px] text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        </div>
                        <div className="text-[11px] md:text-[17px] text-[#363940]  noto-sans-kr">  마케팅 정보 수신 동의(선택)</div>
                    </div>
                </div>

                <div className="border boderd-b-2 border-[#D7D7D7]  "></div>

                <div className=" h-[42px] md:h-[80px] bg-[#FFC800] rounded-2xl ">
                    <button className="w-full h-full flex items-center justify-center text-[#000000] md:text-[23px]  text-[14px] ">
                    회원가입
                    </button>
                </div>


            </div>
        </>
    )
}
