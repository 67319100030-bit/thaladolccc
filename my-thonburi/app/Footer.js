import Link from 'next/link'
import { GraduationCap, Phone, Mail, MapPin, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-tcc-blue text-white p-2 rounded-xl">
                <GraduationCap className="w-6 h-6 text-tcc-gold" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                พณิชยการธนบุรี
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              วิทยาลัยพณิชยการธนบุรี มุ่งมั่นพัฒนาคุณภาพการศึกษาสายอาชีพด้านบริหารธุรกิจด้วยนวัตกรรมและเทคโนโลยีที่ทันสมัย
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              ลิงก์แนะนำ
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-tcc-gold transition-colors">เกี่ยวกับวิทยาลัย</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-tcc-gold transition-colors">ข่าวประชาสัมพันธ์</Link>
              </li>
              <li>
                <Link href="/staff" className="hover:text-tcc-gold transition-colors">ทำเนียบบุคลากร</Link>
              </li>
              <li>
                <Link href="/departments" className="hover:text-tcc-gold transition-colors">แผนกวิชาที่เปิดสอน</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-tcc-gold transition-colors">ติดต่อเรา</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information Systems */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              ระบบสารสนเทศ
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://tcc.rms-online.in.th" target="_blank" rel="noopener noreferrer" className="hover:text-tcc-gold transition-colors flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-500" />
                  <span>ระบบ RMS วิทยาลัย</span>
                </a>
              </li>
              <li>
                <a href="https://std.vec.go.th" target="_blank" rel="noopener noreferrer" className="hover:text-tcc-gold transition-colors flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-500" />
                  <span>ระบบ ศธ.02 ออนไลน์</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tcc-gold transition-colors flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-500" />
                  <span>ระบบห้องสมุดดิจิทัล</span>
                </a>
              </li>
              <li>
                <a href="https://www.vec.go.th" target="_blank" rel="noopener noreferrer" className="hover:text-tcc-gold transition-colors flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-500" />
                  <span>สำนักงานคณะกรรมการการอาชีวศึกษา</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              ติดต่อวิทยาลัย
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-tcc-gold shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  162 ซอยพาณิชยการธนบุรี แขวงวัดท่าพระ เขตบางกอกใหญ่ กรุงเทพมหานคร 10600
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-tcc-gold shrink-0" />
                <span className="text-slate-400">0-2412-2501, 0-2412-4512</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-tcc-gold shrink-0" />
                <span className="text-slate-400">saraban@tcc.ac.th</span>
              </li>
            </ul>
            <div className="flex gap-4 pt-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-tcc-blue p-2 rounded-lg text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>


        </div>

        <div className="border-t border-slate-850 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} วิทยาลัยพณิชยการธนบุรี. สงวนลิขสิทธิ์ทั้งหมด.</p>
          <p>พัฒนาและออกแบบระบบโดย วิทยาลัยพณิชยการธนบุรี</p>
        </div>
      </div>
    </footer>
  )
}
