'use client'
import * as React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AdminSidebar from "@/components/custom/adminSidebar"
import AdminHeader from "@/components/custom/adminHeader"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function AdminProduct() {



    const [imageFile, setImageFile] = useState(null);
    const [image_name, setImageName] = useState('');
    const [productData, setProductData] = useState({
        product_name: '',
        description: '',
        price: '',
        image_url: ''
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

                                    <Input onChange={(e) => { setProductData({ ...productData, description: e.target.value }) }} type="text" className="mt-4" placeholder="수량" />

                                    <Input onChange={(e) => { setProductData({ ...productData, price: e.target.value }) }} type="text" className="mt-4" placeholder="가격" />

                                    <Input onChange={(e) => {
                                        setImageFile(e.target.files[0]);
                                        setProductData({ ...productData, image_url: e.target.files[0].name });
                                        handleFileUpload();
                                    }} type="file" className="mt-4" placeholder="이미지 URL" />
                                </div>

                                <Button onClick={async () => {
                                    let response;
                                    try {
                                        response = await axios.post('/api/check_user/add_product_list', {
                                            product_name: productData.product_name,
                                            description: productData.description,
                                            price: productData.price,
                                            image_url: productData.image_url
                                        });
                                    
                                        if (response.status === 200) {
                                            
                                        }
                                    } catch (error) {
                                        console.error('Error fetching data:', error);
                                        return;
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