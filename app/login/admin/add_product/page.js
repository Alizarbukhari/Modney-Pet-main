'use client'
import * as React from "react"
import { useState, useEffect } from "react"
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
import { useRouter } from "next/navigation"

export default function AdminProduct() {

    const [productData, setProductData] = useState({
        product_name: '',
        number: ''
    })
    const router = useRouter();

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
                                    <Input onChange={(e) => { setProductData({ ...productData, product_name: e.target.value }) }} type="text" placeholder="상품명" />

                                    <Input onChange={(e) => { setProductData({ ...productData, number: e.target.value }) }} type="text" className="mt-4" placeholder="수량" />
                                </div>

                                <Button onClick={() => {
                                    try {
                                        fetch('/api/check_user/add_multi_product', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({
                                                product_name: productData.product_name,
                                                number: productData.number
                                            })
                                        })

                                    } catch (error) {
                                        console.error('Error fetching data:', error);
                                        return
                                    }
                                    router.back();


                                }}

                                    className="w-full mt-8 bg-yellow-400 text-white hover:bg-yellow-500">
                                    + 상품 등록
                                </Button>


                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}