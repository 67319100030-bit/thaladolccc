import Navbar from '../Navbar'
import Footer from '../Footer'
import { Award, Mail, BookOpen } from 'lucide-react'

export default function StaffPage() {
  const departments = [
    {
      name: "คณะผู้บริหารวิทยาลัย",
      staff: [
        {
          name: "ดร.สมชาย ใจดี",
          position: "ผู้อำนวยการวิทยาลัยพณิชยการธนบุรี",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=350&q=80",
          email: "somchaitcc@tcc.ac.th"
        },
        {
          name: "นางสาวศิริพร บุญมี",
          position: "รองผู้อำนวยการฝ่ายวิชาการ",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=350&q=80",
          email: "siriporn.b@tcc.ac.th"
        },
        {
          name: "นายวิชาญ พูนผล",
          position: "รองผู้อำนวยการฝ่ายแผนงานและความร่วมมือ",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=350&q=80",
          email: "wicharn.p@tcc.ac.th"
        }
      ]
    },
    {
      name: "แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล",
      staff: [
        {
          name: "นางกานดา รักดี",
          position: "หัวหน้าแผนกวิชาเทคโนโลยีธุรกิจดิจิทัล",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=350&q=80",
          email: "kanda.r@tcc.ac.th"
        },
        {
          name: "นายณัฐพล โตประยูร",
          position: "ครูผู้สอนสาขาวิชาธุรกิจดิจิทัล",
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=350&q=80",
          email: "nattapol.t@tcc.ac.th"
        },
        {
          name: "นางสาวมุทิตา คงช่วย",
          position: "ครูผู้สอนวิชาคอมพิวเตอร์และสื่อดิจิทัล",
          image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=350&q=80",
          email: "muthita.k@tcc.ac.th"
        }
      ]
    },
    {
      name: "แผนกวิชาการบัญชี",
      staff: [
        {
          name: "นางสาวสมศรี สุขเกษม",
          position: "หัวหน้าแผนกวิชาการบัญชี",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=350&q=80",
          email: "somsri.s@tcc.ac.th"
        },
        {
          name: "นายประวิทย์ มงคล",
          position: "ครูผู้สอนวิชาการบัญชีชั้นสูง",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=350&q=80",
          email: "prawit.m@tcc.ac.th"
        }
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#fcfcfd] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="border-l-4 border-tcc-amber pl-4">
            <h1 className="text-3xl font-extrabold text-tcc-blue">ทำเนียบบุคลากร</h1>
            <p className="text-sm text-slate-500 mt-1">คณะผู้บริหาร ครู และอาจารย์ผู้สอนประจำวิทยาลัยพณิชยการธนบุรี</p>
          </div>

          {/* Department Groups */}
          <div className="space-y-20">
            {departments.map((dept, deptIdx) => (
              <section key={deptIdx} className="space-y-8">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-tcc-amber" />
                  <h2 className="text-xl font-bold text-slate-800 border-b-2 border-slate-100 pb-2 flex-grow">
                    {dept.name}
                  </h2>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                  {dept.staff.map((person, personIdx) => (
                    <div 
                      key={personIdx} 
                      className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group"
                    >
                      <div className="aspect-square bg-slate-150 w-full overflow-hidden relative">
                        <img 
                          src={person.image} 
                          alt={person.name} 
                          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow text-center items-center justify-between space-y-4">
                        <div>
                          <h3 className="font-extrabold text-slate-800 text-lg leading-snug">
                            {person.name}
                          </h3>
                          <p className="text-xs font-semibold text-tcc-blue mt-1.5 leading-relaxed">
                            {person.position}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 py-1.5 px-3 rounded-lg border border-slate-100 w-full justify-center">
                          <Mail className="w-3.5 h-3.5" />
                          <span>{person.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
