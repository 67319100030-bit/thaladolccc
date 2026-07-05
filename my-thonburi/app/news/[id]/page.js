import Navbar from '../../Navbar'
import Footer from '../../Footer'
import { supabase } from '../../lib/supabase'
import Link from 'next/link'
import { Calendar, Tag, ArrowLeft, Download, FileText } from 'lucide-react'

// Mock news data for fallback
const MOCK_NEWS = [
  {
    id: 1,
    title: "เปิดรับสมัครนักศึกษาใหม่ ประจำปีการศึกษา 2569 (รอบโควตาพิเศษ)",
    content: "วิทยาลัยพณิชยการธนบุรี เปิดรับสมัครนักศึกษาใหม่ระดับ ปวช. และ ปวส. ประจำปีการศึกษา 2569 สำหรับสาขาวิชาการบัญชี การตลาด คอมพิวเตอร์ธุรกิจ และภาษาต่างประเทศธุรกิจ เพื่อพัฒนาศักยภาพผู้เรียนก้าวสู่นักบริหารธุรกิจมืออาชีพในยุคดิจิทัล\n\nผู้สนใจสมัครสามารถติดต่อขอรับใบสมัครและยื่นเอกสารได้ที่ฝ่ายแนะแนวการศึกษา อาคาร 1 ชั้น 1 หรือสมัครผ่านระบบออนไลน์ของวิทยาลัย ตั้งแต่วันนี้ถึงวันที่ 31 สิงหาคม 2569\n\nเอกสารที่ต้องใช้ในการสมัครประกอบด้วย สำเนาบัตรประจำตัวประชาชน, สำเนาทะเบียนบ้าน, และสำเนาหลักฐานการศึกษา (ปพ.1)",
    category: "ข่าวประชาสัมพันธ์",
    image_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    file_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // Dummy PDF url
    created_at: "2026-07-05T00:00:00.000Z"
  },
  {
    id: 2,
    title: "ขอเชิญร่วมงานวันคล้ายวันสถาปนาวิทยาลัยพณิชยการธนบุรี ครบรอบปีที่ 69",
    content: "ขอเชิญชวนศิษย์เก่าและศิษย์ปัจจุบัน ร่วมงานวันสถาปนาวิทยาลัย ครบรอบปีที่ 69 ในปีการศึกษานี้\n\nกำหนดการจัดกิจกรรมเริ่มตั้งแต่เวลา 07.30 น. เป็นต้นไป ประกอบด้วยพิธีสงฆ์ทำบุญตักบาตร ณ ลานอเนกประสงค์หน้าเสาธง พิธีบวงสรวงสิ่งศักดิ์สิทธิ์ประจำวิทยาลัย และการประกวดนิทรรศการประวัติศาสตร์วิทยาลัย ณ หอประชุมใหญ่\n\nจึงขอเชิญชวนทุกท่านมาร่วมเฉลิมฉลองและสานสัมพันธ์อันดีระหว่างศิษย์เก่าและศิษย์ปัจจุบัน",
    category: "ข่าวประชาสัมพันธ์",
    image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    created_at: "2026-06-28T00:00:00.000Z"
  },
  {
    id: 3,
    title: "ประกาศจัดซื้อจัดจ้าง ปรับปรุงห้องปฏิบัติการคอมพิวเตอร์และเครือข่ายอินเทอร์เน็ต",
    content: "วิทยาลัยพณิชยการธนบุรีมีความประสงค์จะประกวดราคาจ้างก่อสร้างปรับปรุงห้องปฏิบัติการคอมพิวเตอร์และเครือข่ายอินเทอร์เน็ต ด้วยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)\n\nผู้สนใจสามารถดาวน์โหลดเอกสารประกาศจัดซื้อจัดจ้างฉบับเต็มได้ที่ลิงก์ดาวน์โหลดแนบด้านล่างนี้ หรือสอบถามรายละเอียดเพิ่มเติมได้ที่ฝ่ายบริหารทรัพยากร งานพัสดุวิทยาลัยพณิชยการธนบุรี ในวันและเวลาทำการ",
    category: "จัดซื้อจัดจ้าง",
    image_url: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    file_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    created_at: "2026-06-15T00:00:00.000Z"
  }
]

async function getNewsItem(id) {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !data) {
      console.warn(`Could not load news id ${id} from Supabase. Trying mock data.`);
      return MOCK_NEWS.find(item => item.id.toString() === id.toString()) || null;
    }
    return data;
  } catch (err) {
    console.error(`Error querying news id ${id}:`, err);
    return MOCK_NEWS.find(item => item.id.toString() === id.toString()) || null;
  }
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const news = await getNewsItem(id);

  if (!news) {
    return (
      <>
        <Navbar />
        <main className="flex-grow bg-[#fcfcfd] py-20 px-4 text-center">
          <div className="max-w-md mx-auto space-y-4">
            <h1 className="text-2xl font-bold text-slate-800">ไม่พบข่าวสารที่คุณต้องการ</h1>
            <p className="text-slate-500 text-sm">ข่าวสารรายการนี้อาจถูกลบไปแล้ว หรือลิงก์ไม่ถูกต้อง</p>
            <div className="pt-4">
              <Link 
                href="/news" 
                className="inline-flex items-center gap-2 bg-tcc-blue text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-tcc-blue/90 shadow-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>กลับไปหน้าข่าวสาร</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const dateString = new Date(news.created_at).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#fcfcfd] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-tcc-blue transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>ย้อนกลับ</span>
            </Link>
          </div>

          <article className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-6 sm:p-10 space-y-8">
            
            {/* Meta Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 items-center text-xs">
                <span className="inline-flex items-center gap-1 bg-tcc-blue/10 text-tcc-blue font-semibold px-3 py-1 rounded-full">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{news.category}</span>
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{dateString} น.</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug">
                {news.title}
              </h1>
            </div>

            {/* News Image */}
            {news.image_url && (
              <div className="relative rounded-2xl overflow-hidden shadow-xs aspect-video max-h-[480px] bg-slate-50 w-full">
                <img 
                  src={news.image_url} 
                  alt={news.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* News Content Paragraphs */}
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-6 font-sans">
              {news.content.split('\n').map((paragraph, index) => {
                if (!paragraph.trim()) return null
                return (
                  <p key={index} className="text-justify whitespace-pre-wrap">
                    {paragraph}
                  </p>
                )
              })}
            </div>

            {/* File Attachment Section */}
            {news.file_url && (
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-rose-50 p-3 rounded-xl text-rose-500 shadow-3xs">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">เอกสารประกอบประกาศ</h4>
                    <p className="text-xs text-slate-400">คลิกที่ปุ่มเพื่อดาวน์โหลดเอกสาร PDF</p>
                  </div>
                </div>
                <a 
                  href={news.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-tcc-blue hover:bg-tcc-blue/90 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-colors w-full sm:w-auto justify-center cursor-pointer"
                >
                  <Download className="w-4 h-4 text-tcc-gold" />
                  <span>ดาวน์โหลดเอกสาร</span>
                </a>
              </div>
            )}

          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
