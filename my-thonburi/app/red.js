// ไฟล์ red.js
import React from 'react';

// ข้อมูลหลักสูตรและแผนกวิชา
const academicData = [
  { id: 1, title: "แผนกวิชาสามัญ (ทักษะชีวิต)", text: "General Education" },
  { id: 2, title: "แผนกวิชาภาษาต่างประเทศ", text: "Foreign Languages" },
  { id: 3, title: "แผนกวิชาการบัญชี", text: "Accounting" },
  { id: 4, title: "แผนกวิชาการตลาด", text: "Marketing" },
  { id: 5, title: "แผนกวิชาการเลขานุการ", text: "Secretarial Science" },
  { id: 6, title: "แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล", text: "Digital Business" },
  { id: 7, title: "แผนกวิชาการค้าปลีก", text: "Retail Management" },
  { id: 8, title: "แผนกวิชาการท่องเที่ยว", text: "Tourism & Hospitality" },
  { id: 9, title: "แผนกวิชาการจัดการโลจิสติกส์", text: "Logistics & Supply Chain" },
];

export default function Red() {
  return (
    <section id="academic" className="bg-gradient-to-b from-slate-50 to-blue-50/30 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* หัวข้อสไตล์ Minimalist ปรับเป็นโทนสีน้ำเงินหรูหรา */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">Curriculum</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            หลักสูตร <span className="text-blue-600">แผนกวิชา</span> ทั้งหมด
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* การจัด Grid ของแต่ละแผนกวิชา */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicData.map((section) => (
            <div 
              key={section.id} 
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* ส่วนหัวของการ์ด: แถบสีน้ำเงินไล่เฉด (Gradient) */}
              <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-700 w-full" />
              
              <div className="p-8 flex flex-col justify-between h-48 relative">
                <div>
                  {/* ตัวเลขจางๆ ด้านหลัง จะเปลี่ยนสีเมื่อเมาส์ชี้ */}
                  <span className="absolute right-6 top-4 text-6xl font-bold text-slate-100 select-none group-hover:text-blue-50/50 transition-colors duration-300">
                    0{section.id}
                  </span>
                  
                  {/* ชื่อแผนกวิชาภาษาไทย เปลี่ยนเป็นสีน้ำเงินเมื่อ Hover */}
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                    {section.title}
                  </h3>
                  
                  {/* ชื่อภาษาอังกฤษ Subtitle */}
                  <p className="text-sm text-slate-400 font-medium mt-1">
                    {section.text}
                  </p>
                </div>

                {/* ปุ่มข้อความลิงก์ด้านล่าง ปรับเป็นสีน้ำเงินพร้อมเอฟเฟกต์เคลื่อนไหว */}
                <div className="flex items-center text-xs font-bold text-blue-600 mt-4 group-hover:translate-x-2 transition-transform duration-300">
                  <span>ดูรายละเอียดหลักสูตร</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}