'use client'
import React from 'react'

// 👈 เปลี่ยนชื่อฟังก์ชันจาก gg เป็น Gg
export default function Gg() {
    return (
        <section id="vision" className="bg-[#f5f7fa] flex justify-center items-center min-h-[60vh] py-16 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-[1200px] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                
                {/* กล่องที่ 1: ปรัชญา */}
                <div className="flex-1 bg-[#3ca6f5] p-10 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] relative group">
                    <h2 className="text-2xl font-bold mb-5 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:height-[3px] after:bg-white/60 after:rounded-sm">
                        ปรัชญา
                    </h2>
                    <p className="text-lg font-light leading-relaxed opacity-95">
                        "ความรู้คู่ความดี ตรงต่อเวลา รู้หน้าที่ มีความรับผิดชอบ"
                    </p>
                </div>

                {/* กล่องที่ 2: วิสัยทัศน์ */}
                <div className="flex-1 bg-[#2782cd] p-10 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] relative group">
                    <h2 className="text-2xl font-bold mb-5 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:height-[3px] after:bg-white/60 after:rounded-sm">
                        วิสัยทัศน์
                    </h2>
                    <p className="text-lg font-light leading-relaxed opacity-95">
                        มุ่งมั่นพัฒนาคุณภาพการศึกษาสายอาชีพด้านบริหารธุรกิจ โดยใช้เทคโนโลยีที่ทันสมัยเพื่อตอบสนองความต้องการของตลาดแรงงานและยกระดับมาตรฐานการอาชีวศึกษาสู่สากลโดยความร่วมมือกับทุกภาคส่วน
                    </p>
                </div>

                {/* กล่องที่ 3: อัตลักษณ์/เอกลักษณ์ */}
                <div className="flex-1 bg-[#0b73cb] p-10 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] relative group">
                    <h2 className="text-2xl font-bold mb-5 pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:height-[3px] after:bg-white/60 after:rounded-sm">
                        อัตลักษณ์/เอกลักษณ์
                    </h2>
                    <p className="text-lg font-light leading-relaxed opacity-95 mb-3">
                        <strong className="font-semibold">อัตลักษณ์ :</strong> มีจรรยาบรรณ เชี่ยวชาญวิชาชีพ
                    </p>
                    <p className="text-lg font-light leading-relaxed opacity-95">
                        <strong className="font-semibold">เอกลักษณ์ :</strong> สถาบันเด่น เน้นสร้างนักวิชาชีพ
                    </p>
                </div>

            </div>
        </section>
    )
}