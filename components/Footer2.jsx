import Link from "next/link"
import { MessageCircle, ImageIcon } from "lucide-react"
import Image from "next/image"

export default function Footer2() {
  return (
    <footer className="bg-black text-white  px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Company Name */}
        <h2 className="text-2xl font-bold mb-4">모드니펫 MODNEYPET</h2>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-gray-300 mb-6">
          <p className="md:flex md:items-center md:gap-4">
            <span>대표 이다영</span>
            <span className="hidden md:inline">|</span>
            <span>사업자번호 343-13-00886</span>
            <span className="hidden md:inline">|</span>
            <span>대표전화 010-9942-8601</span>
            <span className="hidden md:inline">|</span>
            <span>이메일 manduuu_@naver.com</span>
          </p>
          <p className="break-words">통신판매번호 2022-경기부천-2782 [사업자정보확인]</p>
          <p className="break-words">14786 경기도 부천시 양지로 237 (옥길동) 광장프런티어벤처5차지식산업센터 930호</p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap  gap-4 mb-6">
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Image src = "/footer/N.svg" width= {16} height={10} alt="N"/>
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Image src = "/footer/blog.svg" width= {16} height={10} alt="blog"/>
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Image src = "/footer/talk.svg" width= {16} height={10} alt="talk"/>
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Image src = "/footer/insta.svg" width= {16} height={10} alt="insta"/>
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Image src = "/footer/u.svg" width= {16} height={10} alt="u"/>
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Image src = "/footer/o.svg" width= {16} height={10} alt="o"/>
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Image src = "/footer/ponja.svg" width= {16} height={10} alt="ponja"/>
          </Link>
        </div>
        <div className="border-b-2 border-white mb-5">

        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mb-6">Copyright(c) All right Reserved.</p>

        {/* Bottom Links */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-300">
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
    </footer>
  )
}

