"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Search, Calendar, ChevronRight, Inbox } from 'lucide-react'

export default function NewsListClient({ initialNews }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด')

  const categories = ['ทั้งหมด', 'ข่าวประชาสัมพันธ์', 'จัดซื้อจัดจ้าง', 'ประกาศทั่วไป']

  // Filter news based on search and category
  const filteredNews = initialNews.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = 
      selectedCategory === 'ทั้งหมด' || item.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-12">
      
      {/* Search and Filters Panel */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="ค้นหาหัวข้อข่าว หรือเนื้อหา..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/20 focus:border-tcc-blue text-sm transition-all bg-slate-50/50 hover:bg-slate-50"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-tcc-blue text-white shadow-xs"
                  : "bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* News Card Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((news) => {
            const dateString = new Date(news.created_at).toLocaleDateString('th-TH', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })

            return (
              <article key={news.id} className="flex flex-col bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video bg-slate-100 overflow-hidden">
                  <img 
                    src={news.image_url || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-tcc-blue/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                    {news.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-slate-400 font-medium mb-2.5 block">
                    📅 {dateString}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-tcc-blue transition-colors line-clamp-2 mb-2 leading-snug">
                    <Link href={`/news/${news.id}`}>{news.title}</Link>
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-5 leading-relaxed flex-grow">
                    {news.content}
                  </p>
                  <div className="pt-4 border-t border-slate-50 mt-auto">
                    <Link 
                      href={`/news/${news.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-tcc-blue hover:text-tcc-amber transition-colors"
                    >
                      <span>อ่านรายละเอียดข่าว</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
          <Inbox className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-700">ไม่พบข้อมูลข่าวสาร</h3>
          <p className="text-slate-400 text-sm mt-1">ลองเปลี่ยนคำค้นหา หรือเลือกหมวดหมู่อื่น</p>
        </div>
      )}

    </div>
  )
}
