'use client'
import React from 'react'
import { Button } from "@/components/ui/button"

function adminHeader({text="모드니펫 관리자"}) {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-yellow-400">
    <div className="flex items-center">
      <h1 className="text-2xl font-semibold text-white">{text ? text : '모드니펫 관리자'}</h1>
    </div>
    <Button variant="outline" className="bg-white text-yellow-600">
      로그아웃
    </Button>
  </header>
  )
}

export default adminHeader