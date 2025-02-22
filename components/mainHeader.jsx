import React from 'react'
import Link from 'next/link'

export default function MainHeader() {
  return (
    <div className="w-full flex justify-start">
      <Link href={"/"}>
        <h1 className="text-xl font-bold hover:text-blue-500">
          하우스오브모드니펫_상세페이지
        </h1>
      </Link>
    </div>
  )
}
