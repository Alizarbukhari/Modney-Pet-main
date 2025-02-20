'use client'
import * as React from "react"
import { useState,useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import AdminSidebar from "@/components/custom/adminSidebar"
import AdminHeader from "@/components/custom/adminHeader"
import useAuth from "@/hooks/useAuth"
import { getCookie } from "@/hooks/setCookie"
import axios from "axios"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AdminPanel() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [sortOrder, setSortOrder] = React.useState("제목")
  const [userInfo,setUserInfo] = React.useState({ product_name: '', description: '', price: '' });
  const {id} = useParams();
  const router = useRouter();

  useEffect(()=>{
    const user_serial = getCookie("user_serial");
    axios.post("/api/get_prod_info",{id:id})
    .then((res)=>{
      console.log(res.data);
      setUserInfo(res.data.info[0]);
      console.log(res.data.info[0])
    })
  },[])

  return (
    <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <AdminHeader />


                {/* Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-semibold">애견정보</h2>

                                </div>
                                <div className="input-border">
                                    <Input  type="text" disabled value={userInfo?.product_name} placeholder="상품명" />

                                    <Input  type="text" disabled value={userInfo?.description} className="mt-4" placeholder="수량" />
                                    <Input type="text" disabled value={userInfo?.price} className="mt-4" placeholder="가격" />
                                    <div className="image-cont mt-8"><Image className="border-2 border-black"
                                    
                                    src={`/product_image/${userInfo?.image}`} alt="상품이미지" width={500} height={400} /></div>
                                </div>

                                <Button onClick={() => {
                                    router.back();
                                }}

                                    className="w-full mt-16 bg-yellow-400 text-white hover:bg-yellow-500">
                                    뒤로 가기
                                </Button>


                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
  )
}