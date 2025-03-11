'use client'
import React from 'react';
import { usePathname } from 'next/navigation';

function AdminSidebar() {
    const currentPath = usePathname();

    return (
        <div className="w-64 bg-white shadow-md">
            <div className="p-4">
                <h2 className="text-xl font-semibold">메뉴</h2>
            </div>
            <nav className="mt-4">
                <a
                    href="/login/admin/product_list"
                    className={`block py-2 px-4 text-sm font-medium ${
                        currentPath === '/login/admin/product_list' ? 'text-yellow-600 bg-yellow-100' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    계시글 관리
                </a>
                <a
                    href="/login/admin/product"
                    className={`block py-2 px-4 text-sm ${
                        currentPath === '/login/admin/product' ? 'text-yellow-600 bg-yellow-100' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    시리얼 관리
                </a>
                <a
                    href="/login/admin/product_list_real"
                    className={`block py-2 px-4 text-sm ${
                        currentPath === '/login/admin/product_list_real' ? 'text-yellow-600 bg-yellow-100' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    상품 관리
                </a>
            </nav>
        </div>
    );
}

export default AdminSidebar;

