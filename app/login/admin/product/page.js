'use client'
import * as React from "react";
import { useState, useEffect } from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import AdminSidebar from "@/components/custom/adminSidebar";
import AdminHeader from "@/components/custom/adminHeader";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AdminProduct() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("제목");
  const [petData, setPetData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await fetch('/api/check_user/fetch_product', {
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
                  <Button variant="contained" className="bg-yellow-400 text-white hover:bg-yellow-500" onClick={() => {
                    router.push('/login/admin/add_product')
                  }}>
                    + 새글등록
                  </Button>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">총 등록 애견정보 {filteredData.length}개</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FormControl variant="outlined" size="small">
                      <InputLabel>정렬</InputLabel>
                      <Select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        label="정렬"
                      >
                        <MenuItem value="제목">제목</MenuItem>
                        <MenuItem value="등록일">등록일</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      variant="outlined"
                      size="small"
                      placeholder="검색어를 입력하세요"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="contained" className="bg-black text-white hover:bg-gray-800">검색</Button>
                  </div>
                </div>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>No</TableCell>
                        <TableCell>상품명</TableCell>
                        <TableCell>고객정보</TableCell>
                        <TableCell>등록일</TableCell>
                        <TableCell>시리얼번호</TableCell>
                        <TableCell>색상</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredData.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage).map((pet, index) => (
                        <TableRow key={pet.id}>
                          <TableCell>{currentPage * itemsPerPage + index + 1}</TableCell>
                          <TableCell>{pet.product_name}</TableCell>
                          <TableCell>{pet.detail_info}</TableCell>
                          <TableCell>{formatDate(pet.added_time)}</TableCell>
                          <TableCell>{pet.serial_number}</TableCell>
                          <TableCell>
                            <div className="w-[20px] h-[20px] rounded-full" style={{ backgroundColor: `#${pet.serial_number}` }}></div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  component="div"
                  count={filteredData.length}
                  page={currentPage}
                  onPageChange={handleChangePage}
                  rowsPerPage={itemsPerPage}
                  rowsPerPageOptions={[10]}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
