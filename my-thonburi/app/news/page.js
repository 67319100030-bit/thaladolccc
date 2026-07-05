import Navbar from '../Navbar'
import Footer from '../Footer'
import NewsListClient from './NewsListClient'
import { supabase } from '../lib/supabase'

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

async function getAllNews() {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false })

    if (error || !data || data.length === 0) {
      console.warn("Could not load news from Supabase. Displaying mock data.");
      return MOCK_NEWS;
    }
    return data;
  } catch (err) {
    console.error("Supabase news fetch error:", err);
    return MOCK_NEWS;
  }
}

export default async function NewsPage() {
  const newsList = await getAllNews();

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#fcfcfd] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Header */}
          <div className="border-l-4 border-tcc-amber pl-4">
            <h1 className="text-3xl font-extrabold text-tcc-blue">ข่าวสารประชาสัมพันธ์</h1>
            <p className="text-sm text-slate-500 mt-1">ติดตามข่าวประกาศ กิจกรรม และการจัดซื้อจัดจ้างของวิทยาลัย</p>
          </div>

          {/* Interactive News List */}
          <NewsListClient initialNews={newsList} />

        </div>
      </main>
      <Footer />
    </>
  )
}
