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



    // const [imageFile, setImageFile] = useState(null);
    const [image_name, setImageName] = useState('');
    const [productData, setProductData] = useState({
        product_name: '',
        description: '',
        category: '',
    })
    const router = useRouter();

    // const handleFileUpload = async () => {
    //     if (!imageFile) return;
    //     const formData = new FormData();
    //     if (imageFile) {
    //         formData.append('file', imageFile);
    //         formData.append('image_name', image_name);
    //         const res = await fetch('/api/upload_image', {
    //             method: 'POST',
    //             body: formData
    //         });

    //         if (res.ok) {
    //             alert('File uploaded successfully');
    //         } else {
    //             alert('File upload failed');
    //         }
    //     }
    // }

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
                                <div className="input-border ">
                                    <div className="relative w-full mt-4">
                                        <select
                                            onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                                            className="border rounded-md w-full h-10 px-2 pr-10 appearance-none"
                                        >
                                            <option value="">Category</option>
                                            {["Cat Name", "Notification", "Question", "Inquiry", "Membership"].map((tab, index) => (
                                                <option key={index} value={tab}>{tab}</option>
                                            ))}
                                        </select>
                                        {/* Dropdown Icon */}
                                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                            🔽 {/* Aap yahan koi SVG ya FontAwesome icon bhi use kar sakte hain */}
                                        </div>
                                    </div>


                                    <Input onChange={(e) => { setProductData({ ...productData, product_name: e.target.value }) }} type="text" className="mt-4" placeholder="Heading" />

                                    <Input onChange={(e) => { setProductData({ ...productData, description: e.target.value }) }} type="text" className="mt-4" placeholder="Description" />


                                </div>

                                <Button onClick={async () => {
                                    let response;
                                    try {
                                        response = await axios.post('/api/check_user/add_product_list', {
                                            product_name: productData.product_name,
                                            description: productData.description,
                                            category: productData.category, 


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