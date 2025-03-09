import Link from "next/link"
import { MessageCircle, ImageIcon } from "lucide-react"
import Image from "next/image"

export default function Footer2() {
  return (
    <div className="bg-black text-white h-[373px] md:h-[451px] items-center  w-full flex justify-center ">
      <div className="w-[390px] h-[224px] noto-sans-kr md:w-[1282px] md:h-[4292pxpx] mx-7 md:mx-36 ">
        {/* Company Name */}
        <div>
        <h2 className="text-[14px] md:text-[24px] noto-sans-kr-bold mb-4">모드니펫 MODNEYPET</h2>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-2  text-[9px] md:text-[15px] items-start  text-gray-300 mb-1">
          <p className="md:flex space-x-[15px] md:space-x-2 items-start  ">
            <span>대표 이다영</span>
            <span className="inline">|</span>
            <span>사업자번호 343-13-00886</span>
            <span className="inline">|</span>
            <span>대표전화 010-9942-8601</span>
            <span className="inline space-x-0 left-0">|</span>
            <span className="items-start hidden md:block">이메일 manduuu_@naver.com</span>
            

          </p>
          <p className="md:flex  md:items-start   ">
            <p1 className="md:hidden space-x-1">
            <span className="items-start md:hidden ">이메일 manduuu_@naver.com</span>
            <span className="inline md:hidden">|</span>
            <span> 통신판매번호 2022-경기부천-2782 <a href="https://modneypet.com/index.html#none" className="underline">[사업자정보확인]</a> </span>

            </p1>
           

             <p1 className="space-x-3 hidden md:block"><span> 통신판매번호 2022-경기부천-2782 <a href="https://modneypet.com/index.html#none" className="underline">[사업자정보확인]</a> </span>
            <span className="hidden md:inline ">|</span>
            <span className=""> 14786 경기도 부천시 양지로 237 (옥길동) 광장프런티어벤처5차지식산업센터 930호</span>
</p1>
          
          </p>
          <p className = "md:hidden "><span className="top-3"> 14786 경기도 부천시 양지로 237 (옥길동) 광장프런티어벤처5차지식산업센터 930호</span>
          </p>
         
       
        </div>
        {/* Copyright */}

        <div className=" ">
        <p className="text-[10px] md:text-[15px] text-gray-400 mb-6">Copyright(c) All right Reserved.</p>
        </div>
        {/* Social Icons */}
        <div className="flex flex-wrap gap-4 md:gap-8 mb-6 ">
          <Link href="#" className="w-[40.65px] h-[40.65px] bg-white rounded-full flex items-center justify-center">
            <Image src = "/footer/N.svg" width= {16} height={19.56} alt="N"/>
          </Link>
          <Link href="#" className="w-[40.65px] h-[40.65px] bg-white rounded-full flex items-center justify-center">
          <Image src = "/footer/blog.svg" width= {16} height={19.56} alt="blog"/>
          </Link>
          <Link href="#" className="w-[40.65px] h-[40.65px] bg-white rounded-full flex items-center justify-center">
          <Image src = "/footer/talk.svg" width= {16} height={19.56} alt="talk"/>
          </Link>
          <Link href="#" className="w-[40.65px] h-[40.65px] bg-white rounded-full hidden  md:flex items-center justify-center">
          <Image src = "/footer/insta.svg" width= {16} height={19.56} alt="insta"/>
          </Link>
          <Link href="#" className="w-[40.65px] h-[40.65px] bg-white rounded-full hidden  md:flex items-center justify-center">
          <Image src = "/footer/u.svg" width= {16} height={19.56} alt="u"/>
          </Link>
          <Link href="#" className="w-[40.65px] h-[40.65px] bg-white hidden  md:flex rounded-full  items-center justify-center">
          <Image src = "/footer/o.svg" width= {16} height={19.56} alt="o"/>
          </Link>
          <Link href="#" className="w-[40.65px] h-[40.65px] bg-white hidden  md:flex items-center rounded-full justify-center">
          <Image src = "/footer/ponja.svg" width= {16} height={19.56} alt="ponja"/>
          </Link>
        </div>
        
     {/* border */}
     <div className="border-[white] border-spacing-4 border-b-2 mb-6 md:mb-10">

     </div>
       


        {/* Bottom Links */}
        <div className="flex mb-8   gap-x-4 gap-y-2 text-[8px] md:text-[14px] text-gray-300">
        <span className="inline border-l-2 md:border-l-[3px]  h-[12px] md:h-[16.01px] my-auto "></span>

          <Link href="#" className="hover:text-white">
            개인정보처리방침
          </Link>
          <span className="inline border-l-2 md:border-l-[3px]  h-[12px] md:h-[16.01px] my-auto "></span>
          <Link href="#" className="hover:text-white h-14px">
            이용약관
          </Link>
          <span className="inline border-l-2 md:border-l-[3px]  h-[12px] md:h-[16.01px] my-auto "></span>
          <Link href="#" className="hover:text-white">
            품질보증신고
          </Link>
          <span className="inline border-l-2 md:border-l-[3px]  h-[12px] md:h-[16.01px] my-auto "></span>
          <Link href="#" className="hover:text-white">
            품질보증신고확인
          </Link>
        </div>
      </div>
    
    </div>
  )
}

