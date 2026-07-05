"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import Link from 'next/link'
import { GraduationCap, Lock, Mail, Eye, EyeOff, ShieldAlert, ArrowLeft } from 'lucide-react'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Redirect to admin dashboard if already logged in
  useEffect(() => {
    async function checkUser() {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        router.push('/admin')
      }
    }
    checkUser()
  }, [router])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (signInError) {
        setError(signInError.message || "อีเมลหรือรหัสผ่านไม่ถูกต้อง")
      } else {
        router.push('/admin')
      }
    } catch (err) {
      console.error(err)
      setError("เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8">
        
        {/* Back link */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-tcc-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>กลับหน้าหลักวิทยาลัย</span>
          </Link>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-lg space-y-8">
          
          {/* Logo & title */}
          <div className="text-center space-y-3">
            <div className="mx-auto bg-tcc-blue text-white p-3 rounded-2xl w-fit shadow-md">
              <GraduationCap className="w-8 h-8 text-tcc-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                ระบบจัดการเว็บไซต์
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                ลงชื่อเข้าใช้งานสำหรับเจ้าหน้าที่ประชาสัมพันธ์วิทยาลัย
              </p>
            </div>
          </div>

          {error && (
            <div className="bg-rose-50 text-rose-600 p-4 rounded-xl border border-rose-100 text-xs font-semibold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-6 text-xs" onSubmit={handleLogin}>
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-slate-600 font-bold">อีเมลผู้ใช้งาน</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@tcc.ac.th"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/15 focus:border-tcc-blue bg-slate-50/50 hover:bg-slate-50 text-sm font-sans"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-slate-600 font-bold">รหัสผ่าน</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-11 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/15 focus:border-tcc-blue bg-slate-50/50 hover:bg-slate-50 text-sm font-sans"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-tcc-blue hover:bg-tcc-blue/90 text-white font-bold py-3.5 rounded-xl shadow-md transition-colors cursor-pointer disabled:opacity-50 text-sm"
            >
              <span>{loading ? "กำลังตรวจสอบข้อมูล..." : "ลงชื่อเข้าใช้งาน"}</span>
            </button>

          </form>

        </div>
      </div>
    </main>
  )
}
