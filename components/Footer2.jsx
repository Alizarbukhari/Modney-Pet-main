import Link from "next/link"
import { MessageCircle, ImageIcon } from "lucide-react"

export default function Footer2() {
  return (
    <footer className="bg-black text-white px-4 py-8 md:py-12">
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
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold">N</span>
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-black" />
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <ImageIcon className="w-5 h-5 text-black" />
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold">@</span>
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold">n</span>
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold">○</span>
          </Link>
          <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold">●</span>
          </Link>
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

