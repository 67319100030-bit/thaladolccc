// hom.js
export default function Home() {
    return (
        <section id="home" className="py-14 bg-gray-50 min-h-screen">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center mt-6">
                    
                    {/* 📸 ส่วนแสดงรูปภาพ (เพิ่มเข้ามาตรงนี้) */}
                        <div className="mb-8 max-w-3xl mx-auto overflow-hidden rounded-xl shadow-md">
                            <img 
                                src="https://i.postimg.cc/9M3r5nnk/720126119-1040555304987627-704656713884342638-n.jpg" 
                                alt="วิทยาลัยพณิชยการธนบุรี" 
                                className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 duration-300"
                            />
                        </div>

                    <h1 className="text-3xl font-bold text-blue-600">
                        ยินดีต้อนรับสู่ วิทยาลัยพณิชยการธนบุรี
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                       สังกัดสถาบันการอาชีวศึกษากรุงเทพมหานคร โดยเปิดสอน 3 หลักสูตร คือ ปวช., ปวส. และปริญญาตรี 
                    </p>
                   
                </div>
            </div>
        </section>
    )
}