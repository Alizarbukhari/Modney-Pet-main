import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useDrag } from "@use-gesture/react"

const POSTS_PER_PAGE = 5

export default function MainPost() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("전체")
  const scrollContainerRef = useRef(null)

  const posts = [
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세 ",
      content: "동해물과 백두산이 마르고 닳도록 하나남이 보우하사 우리나라 만세 동해물과 백두산이 마르고 닳도록 하나남이 보우하사 우리나라 만세 동해물과 백두산이 마르고 닳도록 하나남이 보우하사 우리나라 만세 동해물과 백두산이 마르고 닳도록 하나남이 보우하사 우리나라 만세 동해물과 백두산이 마르고 닳도록 하나남이 보우하사 우리나라 만세",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
    },
  ]

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const goToNextPage = () => setCurrentPage((page) => Math.min(page + 1, totalPages))
  const goToPrevPage = () => setCurrentPage((page) => Math.max(page - 1, 1))

  const scrollToActiveTab = () => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector('[data-active="true"]')
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
      }
    }
  }

  useEffect(() => {
    scrollToActiveTab()
  }, [activeTab, scrollToActiveTab]) // Added scrollToActiveTab to dependencies

  const bind = useDrag(
    ({ movement: [mx], down }) => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft -= mx
      }
    },
    { axis: "x" },
  )

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold text-center py-20">입주건 커뮤니티 개시판</h1>

      {/* Navigation */}
      <div
        className="mb-6 overflow-x-auto scrollbar-hide"
        ref={scrollContainerRef}
        {...bind()}
        style={{ touchAction: "pan-x" }}
      >
        <div className="border-b-2 border-black px-10">
        <div className="flex gap-3  whitespace-nowrap pb-6 ">
          {["전체", "공지사항", "자주묻는질문", "1:1 문의", "맴버십혜택"].map((tab) => (
            <Button
              key={tab}
              variant="link"
              className={activeTab === tab ? "text-primary" : "text-muted-foreground noto-sans-kr "}
              onClick={() => setActiveTab(tab)}
              data-active={activeTab === tab}
            >
              {tab}
            </Button>
          ))}
         {/* Search Bar */}
      <div className="hidden md:flex justify-end ">
        <div className="flex w-full sm:w-72">
          <Input
            type="search"
            placeholder="Search..."
            className="rounded-r-none"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1) // Reset to first page on new search
            }}
          />
          <Button type="submit" className="rounded-l-none">
            검색
          </Button>
        </div>
      </div>
        </div></div>
        
      </div>

     
<div className="w-full border-b-2 border-black "> 
      {/* Posts List */}
      <Accordion type="single" collapsible className="w-full ">
        {currentPosts.map((post, index) => (
          <AccordionItem key={index} value={`item-${startIndex + index}`} className="border-b border-border py-2 px-10">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-left">{post.title}</span>
                <span className="text-sm text-muted-foreground">공지사항</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground pt-2 pb-4">{post.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion></div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button variant="outline" size="icon" onClick={goToPrevPage} disabled={currentPage === 1}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm">
          {currentPage} / {totalPages}
        </span>
        <Button variant="outline" size="icon" onClick={goToNextPage} disabled={currentPage === totalPages}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

