import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useDrag } from "@use-gesture/react"

const POSTS_PER_PAGE = 5
const TITLE_LENGTH_LIMIT = 12 // Max characters for title display


export default function MainPost() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("전체")
  const scrollContainerRef = useRef(null)

  const posts = [
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세 ",
      content: "동해물과 백두산이 마르고 닳도록 하나남이 보우하사 우리나라 만세 동해물과 백두산이 마르고 닳도록 하나남이 보우하사 우리나라 만세 동해물과 백두산이 마르고 닳도록 하나남이 보우하사 우리나라 만세 동해물과 백두산이 마르고 닳도록 하나남이 보우하사 우리나라 만세 동해물과 백두산이 마르고 닳도록 하나남이 보우하사 우리나라 만세",
      date: "2025-03-09", // Added date
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
      date: "2022-01-02",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
      date: "2022-01-03",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세 ",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
      date: "2022-01-04",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
      date: "2022-01-05",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
      date: "2022-01-06",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
      date: "2022-01-07",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
      date: "2022-01-08",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
      date: "2022-01-09",
    },
    {
      title: "동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세 ",
      content: "공지사항 내용이 여기에 표시됩니다. 더 자세한 내용을 확인하실 수 있습니다.",
      date: "2022-01-10",
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
  const truncateTitle = (title) => {
    if (window.innerWidth <= 768) { // For mobile view
      if (title.length > TITLE_LENGTH_LIMIT) {
        return title.slice(0, TITLE_LENGTH_LIMIT) + "..."
      }
    }
    return title;
  }
  
  const isNewPost = (date) => {
    const today = new Date()
    const postDate = new Date(date)
    const timeDifference = today - postDate
    const dayDifference = timeDifference / (1000 * 3600 * 24)
    return dayDifference < 1 // Consider posts within the last day as "new"
  }
  return (
    <div className="container mx-auto p-4  mt-[80px] max-w-4xl">
      <h1 className="text-[20px] md:text-[38px] noto-sans-kr-bold text-center  text-[#000000] mb-8">입주건 커뮤니티 개시판</h1>

      {/* Navigation */}
      <div
        className="mb-6 overflow-x-auto scrollbar-hide"
        ref={scrollContainerRef}
        {...bind()}
        style={{ touchAction: "pan-x" }}
      >
        <div className="border-b-2 border-black md:px-10">
        <div className="flex gap-3 whitespace-nowrap pb-3">
  {["전체", "공지사항", "자주묻는질문", "1:1 문의", "맴버십혜택"].map((tab, index) => (
    <Button
      key={tab}
      variant="link"
      className={`${activeTab === tab ? "text-primary rounded-none hover:no-underline h-2 mt-2 border-[#878787] text-black font-bold noto-sans-kr" : "text-muted-foreground mt-2 noto-sans-kr hover:no-underline h-2 border-[#878787] text-[#878787]"} 
                 ${index !== 4 ? "border-r-2 rounded-none  " : ""}  /* Add border-right except for last tab */`}
      onClick={() => setActiveTab(tab)}
      data-active={activeTab === tab}
    >
      {tab}
    </Button>
  ))}
  {/* Search Bar */}
  <div className="hidden md:flex justify-end items-center  ">
    <div className="flex w-full sm:w-72">
      <Input
        type="search"
        placeholder="Search..."
        className="rounded-r-none"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset to first page on new search
        }}
      />
      <Button type="submit" className="rounded-l-none">
        검색
      </Button>
    </div>
  </div>
</div>
</div>
        
      </div>

     
<div className="w-full border-b-2 border-black "> 
      {/* Posts List */}
      <Accordion type="single" collapsible className="w-full ">
        {currentPosts.map((post, index) => (
          <AccordionItem key={index} value={`item-${startIndex + index}`} className="border-b border-border  px-3 md:px-10">
            <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center justify-between w-full">
                  <span className="text-[12px] md:text-[15px] text-left">
                   
                    {truncateTitle(post.title)}
                    {isNewPost(post.date) && (
                      <span className="text-red-500  text-[9px] mr-2">New</span>
                    )}
                  </span>
                </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[11px] md:text-[13px] text-[#878787] text-muted-foreground pt-2 pb-4">{post.content}</p>
              <span className="text-[12px] md:text-[13px] text-[#878787] text-muted-foreground">{post.date}</span>

            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion></div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8 mb-[124px]">
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

