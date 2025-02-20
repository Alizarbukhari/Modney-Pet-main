'use client'
import * as React from "react"
import { useState } from "react"
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

export default function AdminPanel() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [sortOrder, setSortOrder] = React.useState("제목")

  const petData = [
    { id: 1, title: "국내선 항공기 감아지 탑승기준 안내", date: "2024.08.22" },
    { id: 2, title: "국내선 항공기 감아지 탑승기준 안내", date: "2024.08.22" },
    { id: 3, title: "국내선 항공기 감아지 탑승기준 안내", date: "2024.08.22" },
    { id: 4, title: "국내선 항공기 감아지 탑승기준 안내", date: "2024.08.22" },
    { id: 5, title: "국내선 항공기 감아지 탑승기준 안내", date: "2024.08.22" },
  ]

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
                  <Button className="bg-yellow-400 text-white hover:bg-yellow-500">
                    + 새글등록
                  </Button>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">총 등록 애견정보 00개</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Select value={sortOrder} onValueChange={setSortOrder}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="정렬" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="제목">제목</SelectItem>
                        <SelectItem value="등록일">등록일</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="text"
                      placeholder="검색어를 입력하세요"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                    <Button className="bg-gray-800 text-white hover:bg-gray-700">검색</Button>
                  </div>
                </div>
                <ScrollArea className="h-[400px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">No</TableHead>
                        <TableHead>제목</TableHead>
                        <TableHead className="w-[150px]">등록일</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {petData.map((pet) => (
                        <TableRow key={pet.id}>
                          <TableCell>{pet.id}</TableCell>
                          <TableCell>{pet.title}</TableCell>
                          <TableCell>{pet.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}