import React from 'react'
import Housebag from './housebag'
import Housebag2 from './housebag2'
import Register2 from './register2'
import Image from 'next/image'
import HouseBagComp from '@/components/HouseBag'
import "@fontsource/noto-sans-kr";
import "@/app/globals.css"

function ProdDetail() {
    return (
        <>
            <section className="container h-[100vh] w-full">
                <div
                    className="w-[100vw] h-[100vh] flex flex-col pt-[120px] items-center relative"
                    style={{ backgroundImage: `url('/main/HouseMain.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                >
                    {/* <div className='absolute inset-0 bg-black opacity-50'></div> */}
                    <div className='z-10'>
                        <Image src="/main/HouseMainText.png" alt="house Main text" width={1000} height={1000}></Image>
                        <h1 className="text-4xl font-bold text-white text-center mb-10" style={{ fontFamily: "Noto Sans KR" }}>모드니∩펫 분양가이드</h1>
                        <div className="flex flex-col gap-7 text-[1rem] text-white text-center">
                            <p>안녕하세요.</p>
                            <p>
                                하우스백 시리즈를 구입해주셔서 <br />
                                진심으로 감사합니다.
                            </p>
                            <p>모드니펫은 펫 주거환경 개선을 위해 노력하는 브랜드입니다.</p>
                            <p>
                                단순히 애견이동가방을 판매하는 것이 아닌,<br />
                                펫의 보호자 하우스키퍼와 펫과의 일상의 알락함
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="bg-black border-none h-1"></hr>

            <section className="bg-[#FDF8F1]">
                <section className="container mx-auto gap-11 relative flex flex-col py-40 items-center justify-center">
                    <div className="text-3xl font-bold text-center ">
                        고민의 결과
                        <div className='mb-3'></div>
                        <h2 className="text-[2.5rem] font-[900] text-center">
                            하우스백 시리즈
                        </h2>
                    </div>


                    <div className="flex lg:gap-8 2xl:gap-12 lg:px-9 2xl:px-0 relative items-center justify-center w-[80%] h-[80%]">
                        <div className='relative w-full h-full'>
                            <HouseBagComp></HouseBagComp>
                        </div>
                        <div className='relative w-full h-full'>
                            <HouseBagComp></HouseBagComp>
                        </div>
                        <div className='relative w-full h-full'>
                            <HouseBagComp></HouseBagComp>
                        </div>



                        {/* Control */}
                        <button className="absolute left-0 -translate-y-1/2 top-1/2">
                            <img src="/arrow.svg" alt="icon" />
                        </button>
                        <button className="absolute rotate-180 right-0 -translate-y-1/2 top-1/2">
                            <img src="/arrow.svg" alt="icon" />
                        </button>
                    </div>
                </section>



            </section>

            <hr className="bg-black border-none h-[3px]" />
            <section className="h-[100vh] relative flex flex-col items-center justify-center">

                <h3 className="text-[2.5rem] font-[900] text-center mt-16">
                    하우스오너가 되어주세요.
                </h3>
                <p className="text-2xl text-center mt-6">펫의 보호자</p>
                <div className='relative'>
                    <Image src="/n.svg" alt="n" width={400} height={400}></Image>
                    <p className='absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>모드니펫은 펫 주거환경 개선을 위해 노력하는 브랜드입니다.</p>
                </div>



            </section>
            <hr className="bg-black border-none h-[3px]" />


            <section>
                <Housebag></Housebag>
                <hr className="bg-black border-none h-[3px]" />
            </section>

            <section>
                <Housebag2></Housebag2>
                <hr className="bg-black border-none h-[3px]" />
            </section>

            <section>
                <div className='w-full h-[70vh] flex flex-col items-center justify-center gap-14'>
                    <h3 className='text-[2.5rem] font-[900] text-center mb-[-1rem]'>하우스백 사용방법</h3>
                    <div className='text-center text-[1.8rem]'>
                        <div>하우스백 사용으로 집의 다양한 공간과 기능을 제어하여</div>
                        <div>편리하고 안전한 생활이 가능합니다.</div>
                    </div>
                    <div className='text-[1.3rem] font-[900] text-center border-[3px] border-[#000] bg-[#FFC800] py-3 px-10'>하우스백 사용방법 PDF</div>

                </div>
                <hr className="bg-black border-none h-[3px]" />
            </section>

            <section>
                <Register2></Register2>
                <hr className="bg-black border-none h-[3px]" />
            </section>





        </>

    )
}

export default ProdDetail