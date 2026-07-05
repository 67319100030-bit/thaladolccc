import Navbar from '../Navbar'
import Footer from '../Footer'
import { 
  Laptop, 
  Calculator, 
  TrendingUp, 
  Plane, 
  Truck, 
  BookOpen, 
  FileSpreadsheet, 
  Languages, 
  Compass 
} from 'lucide-react'

export default function DepartmentsPage() {
  const departments = [
    {
      id: 1,
      title: "แผนกวิชาสามัญ (ทักษะชีวิต)",
      english: "General Education",
      desc: "มุ่งเน้นการเสริมสร้างความรู้พื้นฐานวิทยาศาสตร์ คณิตศาสตร์ สังคมศาสตร์ และการพัฒนาทักษะชีวิตเพื่อเตรียมความพร้อมสู่สายอาชีพอย่างมั่นคง",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      title: "แผนกวิชาภาษาต่างประเทศ",
      english: "Foreign Languages",
      desc: "ส่งเสริมความเชี่ยวชาญด้านทักษะภาษาต่างประเทศเพื่อการสื่อสารทางธุรกิจ ทั้งภาษาอังกฤษ ภาษาจีน และภาษาญี่ปุ่น รองรับอุตสาหกรรมในประเทศและสากล",
      icon: Languages,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 3,
      title: "แผนกวิชาการบัญชี",
      english: "Accounting",
      desc: "เรียนรู้กระบวนการจัดทำบัญชีตามมาตรฐานสากล การเสียภาษีอากร การตรวจสอบบัญชี และเทคโนโลยีคอมพิวเตอร์เพื่อซอฟต์แวร์ทางบัญชี",
      icon: Calculator,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "แผนกวิชาการตลาด",
      english: "Marketing",
      desc: "สร้างนักการตลาดเชิงสร้างสรรค์และนักวิเคราะห์โอกาสทางธุรกิจ เรียนรู้การโฆษณา ประชาสัมพันธ์ การตลาดออนไลน์ และการจัดการค้าปลีกสมัยใหม่",
      icon: TrendingUp,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 5,
      title: "แผนกวิชาการเลขานุการ",
      english: "Secretarial Science",
      desc: "พัฒนาศักยภาพงานธุรการและการประสานงานสำนักงานขั้นสูง เรียนรู้ทักษะเทคโนโลยีและจรรยาบรรณวิชาชีพเพื่อการเป็นผู้ช่วยผู้บริหาร",
      icon: FileSpreadsheet,
      color: "from-rose-500 to-orange-500"
    },
    {
      id: 6,
      title: "แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล",
      english: "Digital Business Technology",
      desc: "มุ่งสร้างนักพัฒนาดิจิทัลคอนเทนต์ พาณิชย์อิเล็กทรอนิกส์ (E-commerce) การพัฒนาเว็บไซต์ และระบบเครือข่ายสื่อสารคอมพิวเตอร์สำหรับองค์กรธุรกิจ",
      icon: Laptop,
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 7,
      title: "แผนกวิชาการค้าปลีก",
      english: "Retail Management",
      desc: "ฝึกฝนการจัดการร้านค้า การควบคุมคลังสินค้า และกลยุทธ์การขายหน้าร้านจริง มุ่งเน้นการเรียนรู้แบบทวิภาคีร่วมกับบริษัทร้านค้าปลีกยักษ์ใหญ่",
      icon: Compass,
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: 8,
      title: "แผนกวิชาการท่องเที่ยว",
      english: "Tourism & Hospitality",
      desc: "อบรมทักษะงานมัคคุเทศก์ การจัดการที่พัก งานบริการส่วนหน้า และความเข้าใจในศิลปวัฒนธรรมเพื่อยกระดับบุคลากรอุตสาหกรรมท่องเที่ยวไทยสู่มาตรฐานเอเชีย",
      icon: Plane,
      color: "from-yellow-500 to-emerald-500"
    },
    {
      id: 9,
      title: "แผนกวิชาการจัดการโลจิสติกส์",
      english: "Logistics & Supply Chain",
      desc: "เจาะลึกกระบวนการขนส่ง ห่วงโซ่อุปทาน การกระจายสินค้า และการควบคุมคลังสินค้าด้วยการวางแผนเชิงกลยุทธ์และซอฟต์แวร์ทันสมัย",
      icon: Truck,
      color: "from-emerald-500 to-blue-500"
    }
  ]

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#fcfcfd] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="border-l-4 border-tcc-amber pl-4">
            <h1 className="text-3xl font-extrabold text-tcc-blue">แผนกวิชาที่เปิดสอน</h1>
            <p className="text-sm text-slate-500 mt-1">วิทยาลัยพณิชยการธนบุรีเปิดสอนหลักสูตร ปวช. และ ปวส. ในหลากหลายสาขาวิชา</p>
          </div>

          {/* Department Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => {
              const IconComponent = dept.icon
              return (
                <div 
                  key={dept.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
                >
                  {/* Color Gradient Header bar */}
                  <div className={`h-2.5 bg-gradient-to-r ${dept.color} w-full`} />
                  
                  <div className="p-8 flex flex-col flex-grow relative">
                    {/* Big number inside card background */}
                    <span className="absolute right-6 top-6 text-6xl font-extrabold text-slate-50 select-none group-hover:text-blue-50/40 transition-colors duration-300">
                      0{dept.id}
                    </span>

                    {/* Icon */}
                    <div className="p-3.5 bg-slate-50 rounded-xl w-fit group-hover:scale-105 group-hover:bg-slate-100 transition-all">
                      <IconComponent className="w-6 h-6 text-tcc-blue" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-800 group-hover:text-tcc-blue transition-colors duration-300 relative z-10 leading-snug">
                      {dept.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-1">
                      {dept.english}
                    </p>

                    <p className="mt-4 text-slate-600 text-xs leading-relaxed flex-grow font-sans">
                      {dept.desc}
                    </p>

                    <div className="mt-6 pt-4 border-t border-slate-50 flex items-center text-xs font-bold text-tcc-blue group-hover:translate-x-1 transition-transform">
                      <span>ดูรายละเอียดหลักสูตร</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
