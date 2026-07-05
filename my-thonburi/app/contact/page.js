import Navbar from '../Navbar'
import Footer from '../Footer'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#fcfcfd] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="border-l-4 border-tcc-amber pl-4">
            <h1 className="text-3xl font-extrabold text-tcc-blue">ติดต่อวิทยาลัย</h1>
            <p className="text-sm text-slate-500 mt-1">สอบถามข้อมูล สอบถามการรับสมัคร หรือติดต่อธุรการของวิทยาลัย</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Contact Details & Info Card */}
            <div className="bg-tcc-blue text-white p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-tcc-gold mb-2">
                    วิทยาลัยพณิชยการธนบุรี
                  </h3>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    สถาบันการศึกษาเฉพาะทางที่มุ่งเน้นการผลิตนักวิชาชีพที่มีจริยธรรมและความสามารถระดับสากล
                  </p>
                </div>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-xl text-tcc-gold mt-1">
                      <MapPin className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100 text-sm">ที่อยู่วิทยาลัย</h4>
                      <p className="text-xs text-slate-200 mt-1.5 leading-relaxed font-sans">
                        เลขที่ 162 ซอยพาณิชยการธนบุรี แขวงวัดท่าพระ <br />
                        เขตบางกอกใหญ่ กรุงเทพมหานคร 10600
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-xl text-tcc-gold mt-1">
                      <Phone className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100 text-sm">เบอร์โทรศัพท์ติดต่อ</h4>
                      <p className="text-xs text-slate-200 mt-1.5 font-sans">
                        0-2412-2501, 0-2412-4512
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-xl text-tcc-gold mt-1">
                      <Mail className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100 text-sm">อีเมลงานสารบรรณ</h4>
                      <p className="text-xs text-slate-200 mt-1.5 font-sans">
                        saraban@tcc.ac.th
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-xl text-tcc-gold mt-1">
                      <Clock className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100 text-sm">เวลาทำการงานธุรการ</h4>
                      <p className="text-xs text-slate-200 mt-1.5 font-sans leading-relaxed">
                        วันจันทร์ - วันศุกร์ เวลา 08.30 น. - 16.30 น. <br />
                        (ยกเว้นวันหยุดนักขัตฤกษ์)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-[10px] text-slate-300 font-sans">
                สถาบันการอาชีวศึกษากรุงเทพมหานคร | สำนักงานคณะกรรมการการอาชีวศึกษา
              </div>
            </div>

            {/* Contact Form Container */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-800">ส่งข้อความถึงวิทยาลัย</h3>
              
              <form className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-600 font-semibold">ชื่อ-นามสกุลของคุณ</label>
                    <input 
                      type="text" 
                      placeholder="เช่น สมชาย นามดี" 
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/10 focus:border-tcc-blue bg-slate-50/50 hover:bg-slate-50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-600 font-semibold">อีเมลติดต่อกลับ</label>
                    <input 
                      type="email" 
                      placeholder="เช่น example@domain.com" 
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/10 focus:border-tcc-blue bg-slate-50/50 hover:bg-slate-50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-600 font-semibold">เบอร์โทรศัพท์ติดต่อ</label>
                  <input 
                    type="tel" 
                    placeholder="เช่น 089-xxxxxxx" 
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/10 focus:border-tcc-blue bg-slate-50/50 hover:bg-slate-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-600 font-semibold">หัวข้อเรื่อง</label>
                  <input 
                    type="text" 
                    placeholder="เช่น สอบถามการรับสมัครนักศึกษาใหม่" 
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/10 focus:border-tcc-blue bg-slate-50/50 hover:bg-slate-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-600 font-semibold">ข้อความของคุณ</label>
                  <textarea 
                    rows={4}
                    placeholder="เขียนรายละเอียดคำถามหรือข้อความที่คุณต้องการติดต่อสอบถาม..." 
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/10 focus:border-tcc-blue bg-slate-50/50 hover:bg-slate-50 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-tcc-blue hover:bg-tcc-blue/90 text-white font-bold py-3.5 rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4 text-tcc-gold" />
                  <span>ส่งข้อความ</span>
                </button>
              </form>
            </div>

          </div>

          {/* Embedded Google Maps Area */}
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xs border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.801124694436!2d100.46914567584107!3d13.73051019706782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1s0x30e298642ca519ef%3A0xe9626b4f73cd982e!2z4Lin4Li04LiX4Lii4Liy4Lil4LiY4LiZ4Li04LiK4LiZ4Liy4Lij4LiY4LiZ4Li44Lij4Li1!5e0!3m2!1sth!2sth!4v1710000000000!5m2!1sth!2sth" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="แผนที่วิทยาลัยพณิชยการธนบุรี"
            ></iframe>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
