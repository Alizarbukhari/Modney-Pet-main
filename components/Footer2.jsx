import Link from "next/link"
import { MessageCircle, ImageIcon } from "lucide-react"
import Image from "next/image"

export default function Footer2() {
  return (
    <div className="bg-black text-white  w-full ">
      <div className="w-[390px] h-[373px] noto-sans-kr md:w-[1282px] md:h-[4292pxpx] px-4 md:py-12 py-14 mx-auto">
        {/* Company Name */}
        <div>
        <h2 className="text-[14px] md:text-[24px] noto-sans-kr-bold mb-4">모드니펫 MODNEYPET</h2>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-2  text-[9px] md:text-[15px] text-gray-300 mb-1">
          <p className="md:flex space-x-3 md:items-center md:gap-4">
            <span>대표 이다영</span>
            <span className="inline">|</span>
            <span>사업자번호 343-13-00886</span>
            <span className="inline">|</span>
            <span>대표전화 010-9942-8601</span>
            <span className="inline">|</span>
            <span>이메일 manduuu_@naver.com</span>
            

          </p>
          <p className="md:flex space-x-3 md:items-center md:gap-4">
          <span> 통신판매번호 2022-경기부천-2782 [사업자정보확인]</span>
            <span className="inline">|</span>
            <span> 14786 경기도 부천시 양지로 237 (옥길동) 광장프런티어벤처5차지식산업센터 930호</span>

          </p>
         
       
        </div>
        {/* Copyright */}

        <div className=" ">
        <p className="text-sm text-gray-400 mb-6">Copyright(c) All right Reserved.</p>
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
     <div className="border-[white] border-spacing-4 border-b-2 mb-6 md:mb-8">

     </div>
       


        {/* Bottom Links */}
        <div className="flex  gap-x-4 gap-y-2 text-[10px] md:text-[14px] text-gray-300">
          <Link href="#" className="hover:text-white">
            개인정보처리방침
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="#" className="hover:text-white">
            이용약관
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="#" className="hover:text-white">
            품질보증신고
          </Link>
          <span className="hidden md:inline">|</span>
          <Link href="#" className="hover:text-white">
            품질보증신고확인
          </Link>
        </div>
      </div>
    
    </div>
  )
}

