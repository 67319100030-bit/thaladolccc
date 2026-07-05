// components/News.js หรือสร้างไฟล์ตามโครงสร้างโปรเจกต์ของคุณ
"use client"

export default function News() {
    // ข้อมูลข่าวสารจำลอง
    const newsData = [
        {
            id: 1,
            date: "5 กรกฎาคม 2026",
            title: "เปิดรับสมัครนักศึกษาใหม่ ประจำปีการศึกษา 2569 (รอบโควตาพิเศษ)",
            detail: "วิทยาลัยพณิชยการธนบุรี เปิดรับสมัครนักศึกษาใหม่ระดับ ปวช. และ ปวส. ประจำปีการศึกษา 2569 สำหรับสาขาวิชาการบัญชี การตลาด คอมพิวเตอร์ธุรกิจ และภาษาต่างประเทศธุรกิจ...",
            img: "https://via.placeholder.com/400x200"
        },
        {
            id: 2,
            date: "28 มิถุนายน 2026",
            title: "ขอเชิญชวนศิษย์เก่าและศิษย์ปัจจุบัน ร่วมงานวันสถาปนาวิทยาลัย ครบรอบปีที่ 69",
            detail: "ขอเชิญร่วมพิธีทำบุญตักบาตร และกิจกรรมสานสัมพันธ์ศิษย์เก่าพณิชยการธนบุรี ณ หอประชุมใหญ่ เพื่อร่วมรำลึกและเฉลิมฉลองเนื่องในวันคล้ายวันสถาปนาวิทยาลัย...",
            img: "https://via.placeholder.com/400x200"
        },
        {
            id: 3,
            date: "15 มิถุนายน 2026",
            title: "ทีมนักศึกษาวิทยาลัยพณิชยการธนบุรี คว้าลดเลิศอันดับ 1 การประกวดแผนธุรกิจ",
            detail: "แสดงความยินดีกับทีมนักศึกษาสาขาวิชาการตลาด ที่ได้รับรางวัลชนะเลิศอันดับ 1 ในการประกวดแผนธุรกิจเทคโนโลยีระดับอาชีวศึกษา ประจำปี 2026 ณ ศูนย์นิทรรศการและการประชุมไบเทค...",
            img: "https://via.placeholder.com/400x200"
        }
    ];

    return (
        <section id="news" className="py-16 bg-gray-50 scroll-mt-20">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                {/* หัวข้อเซกชัน */}
                <div className="border-l-4 border-amber-500 pl-4 mb-10">
                    <h2 className="text-2xl font-bold text-blue-900 md:text-3xl">
                        ข่าวประชาสัมพันธ์ล่าสุด
                    </h2>
                </div>

                {/* รายการการ์ดข่าว */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {newsData.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="w-full h-48 object-cover bg-gray-200"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <span className="text-xs text-gray-400 mb-2 block">📅 {item.date}</span>
                                <h3 className="text-base font-semibold text-blue-900 mb-2 line-clamp-2 hover:text-blue-700">
                                    <a href={`/news/${item.id}`}>{item.title}</a>
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                                    {item.detail}
                                </p>
                                <div>
                                    <a 
                                        href={`/news/${item.id}`}
                                        className="inline-block bg-blue-900 text-white text-xs font-medium px-4 py-2 rounded hover:bg-amber-500 transition-colors"
                                    >
                                        อ่านต่อ
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}