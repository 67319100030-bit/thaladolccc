import Navbar from '../Navbar'
import Footer from '../Footer'
import { Target, Compass, Award, Lightbulb, CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      title: "ปรัชญาวิทยาลัย",
      desc: '"ความรู้คู่ความดี ตรงต่อเวลา รู้หน้าที่ มีความรับผิดชอบ"',
      icon: Compass,
      color: "from-blue-500 to-sky-600",
      accent: "text-blue-500 bg-blue-50"
    },
    {
      title: "วิสัยทัศน์",
      desc: "มุ่งมั่นพัฒนาคุณภาพการศึกษาสายอาชีพด้านบริหารธุรกิจ โดยใช้เทคโนโลยีที่ทันสมัยเพื่อตอบสนองความต้องการของตลาดแรงงานและยกระดับมาตรฐานการอาชีวศึกษาสู่สากลโดยความร่วมมือกับทุกภาคส่วน",
      icon: Target,
      color: "from-blue-700 to-indigo-800",
      accent: "text-indigo-600 bg-indigo-50"
    },
    {
      title: "อัตลักษณ์ & เอกลักษณ์",
      desc: "อัตลักษณ์: มีจรรยาบรรณ เชี่ยวชาญวิชาชีพ \nเอกลักษณ์: สถาบันเด่น เน้นสร้างนักวิชาชีพ",
      icon: Award,
      color: "from-tcc-blue to-slate-900",
      accent: "text-amber-600 bg-amber-50"
    }
  ]

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#fcfcfd]">
        
        {/* Page Header */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-tcc-blue text-white py-16 px-4 text-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">เกี่ยวกับวิทยาลัย</h1>
            <p className="text-slate-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
              ทำความรู้จักวิทยาลัยพณิชยการธนบุรี ประวัติความเป็นมา ปรัชญาการศึกษา และทิศทางการมุ่งมั่นพัฒนา
            </p>
          </div>
        </section>

        {/* Philosophy, Vision, Identity Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-tcc-amber tracking-widest uppercase mb-2 block">Our Core Principles</span>
            <h2 className="text-3xl font-extrabold text-slate-900">อัตลักษณ์และวิสัยทัศน์</h2>
            <div className="w-12 h-1 bg-tcc-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const IconComponent = val.icon
              return (
                <div key={idx} className="flex flex-col bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${val.color} w-full`} />
                  <div className="p-8 flex flex-col flex-grow">
                    <div className={`p-4 rounded-2xl w-fit ${val.accent} group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-slate-800">
                      {val.title}
                    </h3>
                    <p className="mt-4 text-slate-600 text-sm leading-relaxed whitespace-pre-line flex-grow font-sans">
                      {val.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* History / Overview Section */}
        <section className="py-20 bg-slate-50 border-t border-b border-slate-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="border-l-4 border-tcc-amber pl-4">
              <h2 className="text-2xl font-bold text-tcc-blue">ประวัติความเป็นมาโดยย่อ</h2>
              <p className="text-xs text-slate-400 mt-1">ก่อตั้งและพัฒนาเพื่อเตรียมคนสู่วิชาชีพ</p>
            </div>

            <div className="space-y-6 text-slate-600 text-sm leading-relaxed font-sans">
              <p>
                วิทยาลัยพณิชยการธนบุรี สังกัดสถาบันการอาชีวศึกษากรุงเทพมหานคร สำนักงานคณะกรรมการการอาชีวศึกษา เป็นสถาบันการศึกษาเฉพาะทางที่มุ่งเน้นการจัดการเรียนการสอนด้านบริหารธุรกิจและการพาณิชย์ ก่อตั้งขึ้นเพื่อเป็นแหล่งเรียนรู้ที่ส่งเสริมทักษะทางวิชาชีพ ความคิดสร้างสรรค์ และจริยธรรมที่จำเป็นสำหรับการทำงานในยุคปัจจุบัน
              </p>
              <p>
                ตลอดระยะเวลากว่า 6 ทศวรรษที่ผ่านมา วิทยาลัยได้ผลิตบุคลากรที่มีคุณภาพสูงออกสู่สังคม ทั้งในระดับประกาศนียบัตรวิชาชีพ (ปวช.) ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) และระดับปริญญาตรีสายเทคโนโลยีหรือสายปฏิบัติการ โดยได้รับความร่วมมือที่ดีจากสมาคมศิษย์เก่า ภาครัฐ และสถานประกอบการชั้นนำของประเทศ
              </p>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-150 shadow-2xs mt-8">
                <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-tcc-amber" />
                  <span>เป้าประสงค์ของวิทยาลัย</span>
                </h4>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>จัดการศึกษาวิชาชีพที่ตอบสนองความต้องการผู้เรียนและสอดคล้องกับทิศทางการพัฒนาประเทศ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>ส่งเสริมและพัฒนาการใช้เทคโนโลยีสารสนเทศในการจัดการเรียนรู้และการบริหารจัดการอย่างมีประสิทธิภาพ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>สร้างเครือข่ายความร่วมมือในการจัดการอาชีวศึกษากับหน่วยงานและสถานประกอบการ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
