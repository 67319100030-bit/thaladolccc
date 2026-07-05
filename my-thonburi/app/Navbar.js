"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ShieldAlert, GraduationCap } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { title: "หน้าแรก", path: "/" },
    { title: "เกี่ยวกับวิทยาลัย", path: "/about" },
    { title: "ข่าวประชาสัมพันธ์", path: "/news" },
    { title: "บุคลากร", path: "/staff" },
    { title: "แผนกวิชา", path: "/departments" },
    { title: "ติดต่อเรา", path: "/contact" }
  ]

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / School Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-tcc-blue text-white p-2 rounded-xl group-hover:scale-105 transition-transform shadow-sm">
              <GraduationCap className="w-7 h-7 text-tcc-gold" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-tcc-blue leading-tight tracking-tight">
                วิทยาลัยพณิชยการธนบุรี
              </span>
              <span className="text-xs text-slate-500 font-medium font-sans">
                Thonburi Commercial College
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item, idx) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={idx}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-tcc-blue bg-primary-50/50 font-semibold"
                      : "text-slate-600 hover:text-tcc-blue hover:bg-slate-50"
                  }`}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>

          {/* Admin Login Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/admin/login"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-tcc-blue border border-slate-200 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <ShieldAlert className="w-4 h-4 text-tcc-amber" />
              <span>ระบบหลังบ้าน</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-tcc-blue focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl absolute top-20 left-0 w-full animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navigation.map((item, idx) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={idx}
                  href={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-tcc-blue bg-primary-50 font-semibold border-l-4 border-tcc-blue"
                      : "text-slate-600 hover:text-tcc-blue hover:bg-slate-50"
                  }`}
                >
                  {item.title}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-slate-100 mt-4 px-4">
              <Link
                href="/admin/login"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-tcc-blue hover:bg-tcc-blue/90 shadow-md transition-colors"
              >
                <ShieldAlert className="w-4 h-4 text-tcc-gold" />
                <span>ระบบหลังบ้าน (สำหรับเจ้าหน้าที่)</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}