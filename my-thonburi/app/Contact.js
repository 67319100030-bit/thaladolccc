// components/Contact.js
"use client"

export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-white scroll-mt-20">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                
                {/* หัวข้อเซกชัน */}
                <div className="border-l-4 border-amber-500 pl-4 mb-10">
                    <h2 className="text-2xl font-bold text-blue-900 md:text-3xl">
                        ติดต่อเรา
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">วิทยาลัยพณิชยการธนบุรี (Thonburi College of Commerce)</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    
                    {/* ฝั่งซ้าย: รายละเอียดการติดต่อ */}
                    <div className="bg-blue-900 text-white p-8 md:p-10 rounded-2xl shadow-lg flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-amber-400">
                                สถานที่ตั้ง & ช่องทางการติดต่อ
                            </h3>
                            
                            <div className="space-y-6">
                                {/* ที่อยู่ */}
                                <div className="flex items-start gap-4">
                                    <span className="text-xl mt-1">📍</span>
                                    <div>
                                        <h4 className="font-medium text-amber-300">ที่อยู่วิทยาลัย</h4>
                                        <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                                            เลขที่ 162 ซอยพาณิชยการธนบุรี แขวงวัดท่าพระ <br />
                                            เขตบางกอกใหญ่ กรุงเทพมหานคร 10600
                                        </p>
                                    </div>
                                </div>

                                {/* เบอร์โทรศัพท์ */}
                                <div className="flex items-start gap-4">
                                    <span className="text-xl mt-1">📞</span>
                                    <div>
                                        <h4 className="font-medium text-amber-300">เบอร์โทรศัพท์</h4>
                                        <p className="text-sm text-gray-200 mt-1">
                                            0-2412-2501, 0-2412-4512
                                        </p>
                                    </div>
                                </div>

                                {/* อีเมล */}
                                <div className="flex items-start gap-4">
                                    <span className="text-xl mt-1">✉️</span>
                                    <div>
                                        <h4 className="font-medium text-amber-300">อีเมลส่วนกลาง</h4>
                                        <p className="text-sm text-gray-200 mt-1">
                                            saraban@tcc.ac.th
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* เวลาทำการ */}
                        <div className="mt-10 pt-6 border-t border-blue-800 text-xs text-gray-300">
                            🕒 เวลาทำการ: วันจันทร์ - วันศุกร์ เวลา 08.30 น. - 16.30 น. (ยกเว้นวันหยุดนักขัตฤกษ์)
                        </div>
                    </div>

                    {/* ฝั่งขวา: แผนที่ Google Maps (Embedded) */}
                    <div className="w-full h-[350px] lg:h-auto min-h-[350px] rounded-2xl overflow-hidden shadow-md border border-gray-200">
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
            </div>
        </section>
    );
}