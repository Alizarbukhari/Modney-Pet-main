'use client'
import * as React from "react";
import { useState, useEffect } from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import AdminSidebar from "@/components/custom/adminSidebar";
import AdminHeader from "@/components/custom/adminHeader";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import AddMainPost from "./component/add_main_post";

export default function AdminProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("제목");
  const [petData, setPetData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await fetch('/api/check_user/fetch_product_list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setPetData(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    }).format(date);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = petData
    .filter(pet => {
      const searchLower = searchTerm.toLowerCase();

      // Convert `added_time` to a consistent date format (yyyy-mm-dd)
      const dateObject = new Date(pet.added_time);
      const formattedDate = dateObject.toISOString().split('T')[0]; // e.g., "2023-01-01"

      console.log('Search Term:', searchTerm); // Debugging search term
      console.log('Product Name:', pet.product_name); // Debugging product name
      console.log('Added Date (formatted):', formattedDate); // Debugging date format

      return (
        (pet.product_name?.toLowerCase() ?? '').includes(searchLower) ||
        (pet.detail_info?.toLowerCase() ?? '').includes(searchLower) ||
        (pet.serial_number?.toLowerCase() ?? '').includes(searchLower) ||
        formattedDate.includes(searchLower) // Match using formatted date
      );
    })
    .sort((a, b) => {
      if (sortOrder === "제목") {
        return a.product_name.localeCompare(b.product_name);
      } else if (sortOrder === "등록일") {
        return new Date(a.added_time) - new Date(b.added_time);
      }
      return 0;
    });

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">애견정보</h2>

                  <div className="button-cont ">
                  <Button variant="contained" className="bg-yellow-400 mr-4 text-white hover:bg-yellow-500" onClick={() => {
                    axios.post('/api/add_admin', {
                      user_id : "admin",
                      password : "admin"
                    })
                  }}>
                    관리자 등록
                  </Button>

                  <Button variant="contained" className="bg-yellow-400 text-white hover:bg-yellow-500" onClick={() => {
                    router.push('/login/admin/add_product_list')
                  }}>
                    + 새글등록
                  </Button>
                  </div>
                </div>
                {/* main post */}
              <div>
                  <AddMainPost/>
              </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
