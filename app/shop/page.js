'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Menu, Search, Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react'

const initialProducts = [
  {
    id: 1,
    name: "2023 포르쉐 Boxster GTS 4.0 (982)",
    price: 115000000,
    image: "/placeholder.svg?height=200&width=300",
    details: "출고일 : 02/8/2023년 · 주행거리 : 10,960km · 연료 : Gasoline",
    brand: "Porsche",
    color: "Red"
  },
  {
    id: 2,
    name: "2023 포르쉐 Boxster GTS 4.0 (982)",
    price: 123000000,
    image: "/placeholder.svg?height=200&width=300",
    details: "색상 : Carmine Red · 연비 : 7,000km · 출고일 : 05/8/2023년",
    brand: "Porsche",
    color: "Red"
  },
  {
    id: 3,
    name: "2024 포르쉐 Boxster GTS 4.0 (982)",
    price: 128000000,
    image: "/placeholder.svg?height=200&width=300",
    details: "색상 : White · 연비 : 4,300km · 출고일 : 11/8/2023년",
    brand: "Porsche",
    color: "White"
  }
]

const FilterSection = ({ filters, setFilters }) => (
  <div className="space-y-4">
    <div>
      <h3 className="font-medium mb-2">Brand</h3>
      <div className="space-y-2">
        {['Porsche', 'BMW', 'Mercedes'].map((brand) => (
          <div key={brand} className="flex items-center">
            <Checkbox 
              id={brand} 
              checked={filters.brands.includes(brand)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setFilters(prev => ({ ...prev, brands: [...prev.brands, brand] }))
                } else {
                  setFilters(prev => ({ ...prev, brands: prev.brands.filter(b => b !== brand) }))
                }
              }}
            />
            <label htmlFor={brand} className="ml-2">{brand}</label>
          </div>
        ))}
      </div>
    </div>
    <Separator />
    <div>
      <h3 className="font-medium mb-2">Price Range</h3>
      <Slider
        min={100000000}
        max={130000000}
        step={1000000}
        value={[filters.priceRange]}
        onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value[0] }))}
      />
      <p className="text-sm mt-2">Max Price: ₩{filters.priceRange.toLocaleString()}</p>
    </div>
    <Separator />
    <div>
      <h3 className="font-medium mb-2">Color</h3>
      <div className="space-y-2">
        {['Red', 'White', 'Blue'].map((color) => (
          <div key={color} className="flex items-center">
            <Checkbox 
              id={color} 
              checked={filters.colors.includes(color)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setFilters(prev => ({ ...prev, colors: [...prev.colors, color] }))
                } else {
                  setFilters(prev => ({ ...prev, colors: prev.colors.filter(c => c !== color) }))
                }
              }}
            />
            <label htmlFor={color} className="ml-2">{color}</label>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function Component() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilters] = useState({
    brands: [],
    priceRange: 130000000,
    colors: [],
    sort: 'name-asc'
  })
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    let filteredProducts = initialProducts.filter(product => 
      (filters.brands.length === 0 || filters.brands.includes(product.brand)) &&
      (product.price <= filters.priceRange) &&
      (filters.colors.length === 0 || filters.colors.includes(product.color)) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.details.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    switch (filters.sort) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
        break
    }

    setProducts(filteredProducts)
  }, [filters, searchTerm])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden"><Menu /></Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <div className="grid gap-4 py-4">
              <h2 className="font-semibold text-lg">Filters</h2>
              <FilterSection filters={filters} setFilters={setFilters} />
            </div>
          </SheetContent>
        </Sheet>
        <div className="text-2xl font-bold">🟥🟨🟦🟩PET</div>
        <div className="flex items-center">
          <Input 
            className="mr-2" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button size="icon"><Search /></Button>
        </div>
      </header>

      <div className="flex-1 flex">
        <aside className="w-64 p-4 border-r hidden lg:block">
          <h2 className="font-semibold mb-4 text-lg">Filters</h2>
          <FilterSection filters={filters} setFilters={setFilters} />
        </aside>

        <main className="flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Pet Carriers</h1>
            <Select value={filters.sort} onValueChange={(value) => setFilters(prev => ({ ...prev, sort: value }))}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
                <SelectItem value="name-desc">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                  <p className="text-sm text-gray-500">{product.details}</p>
                  <p className="text-lg font-bold mt-2">₩{product.price.toLocaleString()}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button>Add to Cart</Button>
                  <Button variant="outline">Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>

      <footer className="bg-gray-100 p-4">
        <div className="flex justify-center space-x-4">
          <Button size="icon" variant="ghost"><Facebook /></Button>
          <Button size="icon" variant="ghost"><Instagram /></Button>
          <Button size="icon" variant="ghost"><Youtube /></Button>
          <Button size="icon" variant="ghost"><Twitter /></Button>
          <Button size="icon" variant="ghost"><Linkedin /></Button>
        </div>
      </footer>
    </div>
  )
}