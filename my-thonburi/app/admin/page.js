"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabase'
import Link from 'next/link'
import { 
  Plus, 
  Edit2, 
  Trash2, 
  LogOut, 
  Search, 
  Calendar, 
  FileText, 
  Tag, 
  GraduationCap, 
  LayoutDashboard, 
  Database,
  ArrowRight,
  Loader2
} from 'lucide-react'

export default function AdminDashboard() {
  const [user, setUser] = useState(null)
  const [newsList, setNewsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const router = useRouter()

  // Auth Guard
  useEffect(() => {
    async function checkUser() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/admin/login')
      } else {
        setUser(user)
        fetchNews()
      }
    }
    checkUser()
  }, [router])

  // Fetch news from database
  const fetchNews = async () => {
    setLoading(true)
    setError('')
    try {
      const { data, error: dbError } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false })

      if (dbError) {
        throw dbError
      }
      setNewsList(data || [])
    } catch (err) {
      console.error(err)
      setError("ไม่สามารถดึงข้อมูลข่าวสารได้ (อาจยังไม่ได้สร้างตาราง 'news' หรือการเชื่อมต่อมีปัญหา)")
    } finally {
      setLoading(false)
    }
  }

  // Handle Logout
  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  // Handle Delete News
  const handleDelete = async (id) => {
    if (!window.confirm("คุณต้องการลบข่าวสารรายการนี้ใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้")) {
      return
    }

    try {
      const { error: deleteError } = await supabase
        .from('news')
        .delete()
        .eq('id', id)

      if (deleteError) {
        throw deleteError
      }

      setSuccessMsg("ลบข่าวสารเรียบร้อยแล้ว")
      // Remove from UI state
      setNewsList(newsList.filter(item => item.id !== id))
      
      setTimeout(() => setSuccessMsg(''), 3000)
    } catch (err) {
      console.error(err)
      alert("ลบข้อมูลไม่สำเร็จ: " + (err.message || err))
    }
  }

  // Filtered news items
  const filteredNews = newsList.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Initialize DB helper for testing
  const handleCreateDemoNews = async () => {
    setLoading(true)
    try {
      const demoData = [
        {
          title: "เปิดรับสมัครนักศึกษาใหม่ ประจำปีการศึกษา 2569 (รอบโควตาพิเศษ)",
          content: "วิทยาลัยพณิชยการธนบุรี เปิดรับสมัครนักศึกษาใหม่ระดับ ปวช. และ ปวส. ประจำปีการศึกษา 2569 สำหรับสาขาวิชาการบัญชี การตลาด คอมพิวเตอร์ธุรกิจ และภาษาต่างประเทศธุรกิจ เพื่อพัฒนาศักยภาพผู้เรียนก้าวสู่นักบริหารธุรกิจมืออาชีพในยุคดิจิทัล...\n\nผู้สนใจสมัครสามารถติดต่อขอรับใบสมัครและยื่นเอกสารได้ที่ฝ่ายแนะแนวการศึกษา อาคาร 1 ชั้น 1 หรือสมัครผ่านระบบออนไลน์ของวิทยาลัย ตั้งแต่วันนี้ถึงวันที่ 31 สิงหาคม 2569\n\nเอกสารที่ต้องใช้ในการสมัครประกอบด้วย สำเนาบัตรประจำตัวประชาชน, สำเนาทะเบียนบ้าน, และสำเนาหลักฐานการศึกษา (ปพ.1)",
          category: "ข่าวประชาสัมพันธ์",
          image_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "ขอเชิญร่วมงานวันคล้ายวันสถาปนาวิทยาลัยพณิชยการธนบุรี ครบรอบปีที่ 69",
          content: "ขอเชิญชวนศิษย์เก่าและศิษย์ปัจจุบัน ร่วมงานวันสถาปนาวิทยาลัย ครบรอบปีที่ 69 ในปีการศึกษานี้\n\nกำหนดการจัดกิจกรรมเริ่มตั้งแต่เวลา 07.30 น. เป็นต้นไป ประกอบด้วยพิธีสงฆ์ทำบุญตักบาตร ณ ลานอเนกประสงค์หน้าเสาธง พิธีบวงสรวงสิ่งศักดิ์สิทธิ์ประจำวิทยาลัย และการประกวดนิทรรศการประวัติศาสตร์วิทยาลัย ณ หอประชุมใหญ่\n\nจึงขอเชิญชวนทุกท่านมาร่วมเฉลิมฉลองและสานสัมพันธ์อันดีระหว่างศิษย์เก่าและศิษย์ปัจจุบัน",
          category: "ข่าวประชาสัมพันธ์",
          image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]

      const { error: insertError } = await supabase
        .from('news')
        .insert(demoData)

      if (insertError) throw insertError
      setSuccessMsg("สร้างข่าวสารจำลองลงฐานข้อมูลสำเร็จแล้ว!")
      fetchNews()
      setTimeout(() => setSuccessMsg(''), 3000)
    } catch (err) {
      console.error(err)
      alert("สร้างข้อมูลจำลองไม่สำเร็จ! กรุณาตรวจสอบว่าได้สร้างตาราง 'news' ใน Supabase SQL Editor แล้วหรือยัง\n\nสามารถก๊อปปี้สคริปต์ในไฟล์ schema.sql ไปรันได้เลยครับ")
    } finally {
      setLoading(false)
    }
  }

  if (loading && !user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="text-center space-y-2">
          <Loader2 className="w-8 h-8 animate-spin text-tcc-blue mx-auto" />
          <p className="text-xs text-slate-500 font-semibold">กำลังตรวจสอบสิทธิ์การใช้งาน...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Top Header Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-tcc-blue text-white p-1.5 rounded-lg">
              <LayoutDashboard className="w-5 h-5 text-tcc-gold" />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-extrabold text-slate-800 leading-tight">
                แผงควบคุมระบบจัดการข้อมูล
              </h1>
              <p className="text-[10px] text-slate-400 font-sans">
                ผู้ใช้งาน: {user?.email}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Link 
              href="/"
              className="text-xs font-semibold text-slate-500 hover:text-tcc-blue transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-50 flex items-center gap-1"
            >
              <span>หน้าแรกวิทยาลัย</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={handleLogout}
              className="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ออกจากระบบ</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Workspace */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {successMsg && (
          <div className="bg-emerald-50 text-emerald-600 p-4 rounded-xl border border-emerald-100 text-xs font-semibold">
            {successMsg}
          </div>
        )}

        {error && (
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 text-xs space-y-4">
            <p className="text-rose-600 font-semibold">{error}</p>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={handleCreateDemoNews}
                className="bg-tcc-blue hover:bg-tcc-blue/90 text-white font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Database className="w-3.5 h-3.5 text-tcc-gold" />
                <span>รันคำสั่งทดสอบเชื่อมต่อ / สร้างข้อมูลจำลอง</span>
              </button>
              <Link 
                href="/news"
                className="text-slate-600 hover:text-tcc-blue font-semibold border border-slate-200 bg-white px-4 py-2 rounded-xl flex items-center gap-1"
              >
                <span>เปิดดูหน้ารายชื่อข่าว</span>
              </Link>
            </div>
          </div>
        )}

        {/* Dashboard Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
            <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold">จำนวนข่าวสารทั้งหมด</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{newsList.length} รายการ</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
            <div className="bg-amber-50 text-amber-600 p-3 rounded-xl">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold">หมวดหมู่ประชาสัมพันธ์</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">
                {newsList.filter(item => item.category === 'ข่าวประชาสัมพันธ์').length} รายการ
              </h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
            <div className="bg-rose-50 text-rose-600 p-3 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-semibold">อัปเดตล่าสุดเมื่อ</p>
              <h3 className="text-sm font-bold text-slate-800 mt-2">
                {newsList.length > 0 ? new Date(newsList[0].created_at).toLocaleDateString('th-TH') : '-'}
              </h3>
            </div>
          </div>
        </div>

        {/* Action Bar (Search & Create) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ค้นหาตามชื่อข่าว..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/10 focus:border-tcc-blue text-xs font-sans"
            />
          </div>
          
          <Link
            href="/admin/news/new"
            className="w-full sm:w-auto bg-tcc-blue hover:bg-tcc-blue/90 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-colors"
          >
            <Plus className="w-4 h-4 text-tcc-gold" />
            <span>เขียนข่าวสารใหม่</span>
          </Link>
        </div>

        {/* News List Data Table */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-bold">
                  <th className="py-4 px-6 text-center w-16">ID</th>
                  <th className="py-4 px-6">รูปภาพ</th>
                  <th className="py-4 px-6">หัวข้อข่าวสาร</th>
                  <th className="py-4 px-6 w-40">หมวดหมู่</th>
                  <th className="py-4 px-6 w-44">วันที่เผยแพร่</th>
                  <th className="py-4 px-6 text-center w-32">จัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-sans">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-slate-400">
                      <Loader2 className="w-6 h-6 animate-spin text-tcc-blue mx-auto mb-2" />
                      <span>กำลังโหลดตารางข้อมูลข่าวสาร...</span>
                    </td>
                  </tr>
                ) : filteredNews.length > 0 ? (
                  filteredNews.map((news) => {
                    const dateVal = new Date(news.created_at).toLocaleDateString('th-TH', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })

                    return (
                      <tr key={news.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 text-center font-semibold text-slate-400">{news.id}</td>
                        <td className="py-4 px-6">
                          <div className="w-14 h-10 rounded-lg bg-slate-100 overflow-hidden border border-slate-200">
                            <img 
                              src={news.image_url || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"} 
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-bold text-slate-800 block line-clamp-1 hover:text-tcc-blue transition-colors">
                            {news.title}
                          </span>
                          <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                            {news.content}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-lg border border-slate-200/50">
                            {news.category}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-slate-400">{dateVal}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-center gap-2">
                            <Link
                              href={`/admin/news/${news.id}`}
                              className="p-2 bg-slate-50 border border-slate-150 rounded-lg text-slate-600 hover:bg-tcc-blue hover:text-white hover:border-tcc-blue transition-colors"
                              title="แก้ไขข้อมูล"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </Link>
                            <button
                              onClick={() => handleDelete(news.id)}
                              className="p-2 bg-rose-50 border border-rose-100 rounded-lg text-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-colors cursor-pointer"
                              title="ลบข้อมูล"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400">
                      ไม่พบข่าวสารในระบบ
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  )
}
