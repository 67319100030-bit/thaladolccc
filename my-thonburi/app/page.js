import Navbar from './Navbar'
import Footer from './Footer'
import Link from 'next/link'
import { supabase } from './lib/supabase'
import { ArrowRight, Newspaper, Calendar, Globe, Building2, BookOpen, UserCheck, ShieldAlert, Award } from 'lucide-react'

// Mock news data fallback
const MOCK_NEWS = [
  {
    id: 1,
    title: "เปิดรับสมัครนักศึกษาใหม่ ประจำปีการศึกษา 2569 (รอบโควตาพิเศษ)",
    content: "วิทยาลัยพณิชยการธนบุรี เปิดรับสมัครนักศึกษาใหม่ระดับ ปวช. และ ปวส. ประจำปีการศึกษา 2569 สำหรับสาขาวิชาการบัญชี การตลาด คอมพิวเตอร์ธุรกิจ และภาษาต่างประเทศธุรกิจ เพื่อพัฒนาศักยภาพผู้เรียนก้าวสู่นักบริหารธุรกิจมืออาชีพในยุคดิจิทัล...",
    category: "ข่าวประชาสัมพันธ์",
    image_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    created_at: "2026-07-05T00:00:00.000Z"
  },
  {
    id: 2,
    title: "ขอเชิญร่วมงานวันคล้ายวันสถาปนาวิทยาลัยพณิชยการธนบุรี ครบรอบปีที่ 69",
    content: "ขอเชิญชวนศิษย์เก่าและศิษย์ปัจจุบัน ร่วมงานวันสถาปนาวิทยาลัย ครบรอบปีที่ 69 พิธีทำบุญตักบาตรพระสงฆ์ 10 รูป ณ หอประชุมใหญ่ และกิจกรรมสานสัมพันธ์ศิษย์เก่าพณิชยการธนบุรี...",
    category: "ข่าวประชาสัมพันธ์",
    image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    created_at: "2026-06-28T00:00:00.000Z"
  },
  {
    id: 3,
    title: "ประกาศจัดซื้อจัดจ้าง ปรับปรุงห้องปฏิบัติการคอมพิวเตอร์และเครือข่ายอินเทอร์เน็ต",
    content: "วิทยาลัยพณิชยการธนบุรีมีความประสงค์จะประกวดราคาจ้างก่อสร้างปรับปรุงห้องปฏิบัติการคอมพิวเตอร์และเครือข่ายอินเทอร์เน็ต ด้วยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)...",
    category: "จัดซื้อจัดจ้าง",
    image_url: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    created_at: "2026-06-15T00:00:00.000Z"
  }
]

async function getFeaturedNews() {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3)

    if (error || !data || data.length === 0) {
      console.warn("Could not load news from Supabase (maybe table doesn't exist yet). Displaying mock data.");
      return MOCK_NEWS;
    }
    return data;
  } catch (err) {
    console.error("Supabase news fetch error:", err);
    return MOCK_NEWS;
  }
}

export default async function Page() {
  const featuredNews = await getFeaturedNews();

  const systems = [
    { name: "ระบบ RMS วิทยาลัย", url: "https://tcc.rms-online.in.th", desc: "ระบบบริหารจัดการสถานศึกษา", icon: Building2, color: "text-blue-600 bg-blue-50" },
    { name: "ระบบ ศธ.02 ออนไลน์", url: "https://std.vec.go.th", desc: "ตรวจสอบผลการเรียนและตารางเรียน", icon: UserCheck, color: "text-amber-600 bg-amber-50" },
    { name: "ระบบห้องสมุดดิจิทัล", url: "#", desc: "สืบค้นหนังสือและวิทยานิพนธ์", icon: BookOpen, color: "text-emerald-600 bg-emerald-50" },
    { name: "ปฏิทินการศึกษา", url: "/about#calendar", desc: "วันสำคัญของภาคเรียน", icon: Calendar, color: "text-rose-600 bg-rose-50" },
  ]

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-tcc-blue text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8">
          {/* Overlay background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tcc-gold/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-6xl mx-auto text-center space-y-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-tcc-gold backdrop-blur-sm border border-white/10">
              <Award className="w-3.5 h-3.5" />
              <span>สถาบันเด่น เน้นสร้างนักวิชาชีพ</span>
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                วิทยาลัยพณิชยการธนบุรี
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                ยกระดับมาตรฐานการศึกษาด้านบริหารธุรกิจและดิจิทัล มุ่งเน้นจรรยาบรรณวิชาชีพและเทคโนโลยีที่ทันสมัยเพื่อตลาดงานระดับสากล
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/news" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-tcc-gold hover:bg-tcc-gold/90 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200"
              >
                <span>ข่าวสารอัปเดตล่าสุด</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200"
              >
                <span>ติดต่อวิทยาลัย</span>
              </Link>
            </div>

            {/* School Hero Image */}
            <div className="pt-8 max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video md:h-[420px] w-full">
                <img 
                  src="https://i.postimg.cc/9M3r5nnk/720126119-1040555304987627-704656713884342638-n.jpg" 
                  alt="วิทยาลัยพณิชยการธนบุรี" 
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. SYSTEM SHORTCUTS */}
        <section className="py-20 bg-slate-50 border-b border-slate-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-tcc-amber tracking-widest uppercase mb-2 block">Information Systems</span>
              <h2 className="text-3xl font-extrabold text-slate-900">ระบบบริการสารสนเทศ</h2>
              <div className="w-12 h-1 bg-tcc-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {systems.map((sys, idx) => {
                const IconComponent = sys.icon
                return (
                  <a
                    key={idx}
                    href={sys.url}
                    target={sys.url.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex flex-col p-6 bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-350 cursor-pointer group"
                  >
                    <div className={`p-3.5 rounded-xl w-fit ${sys.color} group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="mt-5 text-base font-bold text-slate-800 group-hover:text-tcc-blue transition-colors">
                      {sys.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed flex-grow">
                      {sys.desc}
                    </p>
                    <div className="mt-4 flex items-center text-xs font-bold text-tcc-blue gap-1 group-hover:translate-x-1 transition-transform">
                      <span>เข้าใช้งานระบบ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3. FEATURED NEWS SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
              <div>
                <span className="text-xs font-bold text-tcc-amber tracking-widest uppercase mb-2 block">Latest Announcements</span>
                <h2 className="text-3xl font-extrabold text-slate-900">ข่าวประชาสัมพันธ์ล่าสุด</h2>
              </div>
              <Link 
                href="/news" 
                className="inline-flex items-center gap-1 text-sm font-bold text-tcc-blue hover:text-tcc-blue/80 hover:underline transition-colors shrink-0"
              >
                <span>ดูข่าวทั้งหมด</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredNews.map((news) => {
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
                      <div className="pt-4 border-t border-slate-50">
                        <Link 
                          href={`/news/${news.id}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-tcc-blue hover:text-tcc-amber transition-colors"
                        >
                          <span>อ่านรายละเอียด</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* 4. VISION TEASER */}
        <section className="bg-gradient-to-br from-tcc-blue to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-tcc-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold text-tcc-gold tracking-wider uppercase">Philosophy & Identity</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">"ความรู้คู่ความดี ตรงต่อเวลา รู้หน้าที่ มีความรับผิดชอบ"</h2>
              <p className="text-sm text-slate-300 font-light max-w-xl">
                ปรัชญาของพวกเราในการผลักดันเยาวชนสู่ความพร้อมระดับมืออาชีพ ค้นหาข้อมูลเกี่ยวกับวิสัยทัศน์ แผนผังวิทยาลัย และบุคลากรของเราเพิ่มเติม
              </p>
            </div>
            <Link 
              href="/about" 
              className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-tcc-gold hover:text-slate-950 transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <span>เกี่ยวกับวิทยาลัย</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}