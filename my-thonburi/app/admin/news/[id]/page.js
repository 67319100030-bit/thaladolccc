"use client"

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../../lib/supabase'
import Link from 'next/link'
import { ArrowLeft, Save, Upload, Link2, FileText, Image as ImageIcon, Loader2 } from 'lucide-react'

export default function EditNewsPage({ params: paramsPromise }) {
  const params = use(paramsPromise)
  const id = params.id

  const [user, setUser] = useState(null)
  const [loadingItem, setLoadingItem] = useState(true)
  
  // Form fields
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('ข่าวประชาสัมพันธ์')
  const [imageUrl, setImageUrl] = useState('')
  const [fileUrl, setFileUrl] = useState('')

  // Upload/Submit states
  const [uploadingImage, setUploadingImage] = useState(false)
  const [uploadingFile, setUploadingFile] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const router = useRouter()

  // Auth Guard & Fetch Initial Data
  useEffect(() => {
    async function initPage() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/admin/login')
        return
      }
      setUser(user)
      
      // Load current news details
      try {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .eq('id', id)
          .single()

        if (error || !data) {
          throw new Error(error?.message || "ไม่พบข้อมูลข่าวสารรายการนี้")
        }

        setTitle(data.title)
        setContent(data.content)
        setCategory(data.category)
        setImageUrl(data.image_url || '')
        setFileUrl(data.file_url || '')
      } catch (err) {
        console.error(err)
        setErrorMsg("เกิดข้อผิดพลาดในการโหลดข่าวสาร: " + err.message)
      } finally {
        setLoadingItem(false)
      }
    }
    initPage()
  }, [id, router])

  // File Upload Helper
  const uploadFileToStorage = async (file, fileType) => {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
    const filePath = `${fileType}/${fileName}`

    // Upload to 'news-assets' bucket
    const { data, error: uploadError } = await supabase.storage
      .from('news-assets')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (uploadError) {
      throw uploadError
    }

    // Get Public URL
    const { data: { publicUrl } } = supabase.storage
      .from('news-assets')
      .getPublicUrl(filePath)

    return publicUrl
  }

  // Handle Image Upload
  const handleImageFileChange = async (e) => {
    if (!e.target.files || e.target.files.length === 0) return
    const file = e.target.files[0]
    setUploadingImage(true)
    setErrorMsg('')

    try {
      const url = await uploadFileToStorage(file, 'images')
      setImageUrl(url)
    } catch (err) {
      console.error(err)
      setErrorMsg("ไม่สามารถอัปโหลดรูปภาพได้! กรุณาตรวจสอบว่าได้สร้าง Bucket ชื่อ 'news-assets' และตั้งค่าเป็นสาธารณะ (Public) ในระบบ Supabase แล้วหรือยัง หรือกรอกเป็น URL รูปภาพด้านล่างแทน")
    } finally {
      setUploadingImage(false)
    }
  }

  // Handle PDF Upload
  const handlePdfFileChange = async (e) => {
    if (!e.target.files || e.target.files.length === 0) return
    const file = e.target.files[0]
    setUploadingFile(true)
    setErrorMsg('')

    try {
      const url = await uploadFileToStorage(file, 'documents')
      setFileUrl(url)
    } catch (err) {
      console.error(err)
      setErrorMsg("ไม่สามารถอัปโหลดไฟล์ PDF ได้! กรุณาตรวจสอบว่าได้สร้าง Bucket ชื่อ 'news-assets' และตั้งค่าเป็นสาธารณะ (Public) ในระบบ Supabase แล้วหรือยัง หรือกรอกเป็น URL เอกสารด้านล่างแทน")
    } finally {
      setUploadingFile(false)
    }
  }

  // Handle Form Submit (Update)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !content || !category) {
      setErrorMsg("กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน")
      return
    }

    setSubmitting(true)
    setErrorMsg('')

    try {
      const updatedNewsItem = {
        title,
        content,
        category,
        image_url: imageUrl || null,
        file_url: fileUrl || null
      }

      const { error: updateError } = await supabase
        .from('news')
        .update(updatedNewsItem)
        .eq('id', id)

      if (updateError) {
        throw updateError
      }

      router.push('/admin')
    } catch (err) {
      console.error(err)
      setErrorMsg("บันทึกข้อมูลไม่สำเร็จ: " + (err.message || err))
    } finally {
      setSubmitting(false)
    }
  }

  if (loadingItem && !user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <Loader2 className="w-8 h-8 animate-spin text-tcc-blue" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full mx-auto space-y-6">
        
        {/* Back Link */}
        <div className="flex items-center justify-between">
          <Link
            href="/admin"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-tcc-blue transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ย้อนกลับไปหน้าแดชบอร์ด</span>
          </Link>
          <span className="text-xs text-slate-400 font-medium">แก้ไขข่าว (ID: {id})</span>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-6 sm:p-10 space-y-8">
          
          <div>
            <h1 className="text-xl font-bold text-slate-800">
              แก้ไขข้อมูลข่าวสารประชาสัมพันธ์
            </h1>
            <p className="text-xs text-slate-400 mt-1">อัปเดตรายละเอียดและกดบันทึกเพื่อนำไปแสดงผลใหม่</p>
          </div>

          {errorMsg && (
            <div className="bg-rose-50 text-rose-600 p-4 rounded-xl border border-rose-100 text-xs font-semibold whitespace-pre-line leading-relaxed">
              {errorMsg}
            </div>
          )}

          {loadingItem ? (
            <div className="py-20 text-center text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin text-tcc-blue mx-auto mb-2" />
              <span>กำลังดึงข้อมูลข่าวสาร...</span>
            </div>
          ) : (
            <form className="space-y-6 text-xs font-sans" onSubmit={handleSubmit}>
              
              {/* Title */}
              <div className="space-y-1.5">
                <label className="text-slate-600 font-bold">หัวข้อข่าวสาร <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  required
                  placeholder="ระบุหัวข้อข่าวเด่นชัด..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/15 focus:border-tcc-blue text-sm bg-slate-50/50 hover:bg-slate-50"
                />
              </div>

              {/* Category selection */}
              <div className="space-y-1.5">
                <label className="text-slate-600 font-bold">หมวดหมู่ข่าวสาร <span className="text-rose-500">*</span></label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/15 focus:border-tcc-blue text-sm bg-slate-50/50 hover:bg-slate-50 cursor-pointer"
                >
                  <option value="ข่าวประชาสัมพันธ์">ข่าวประชาสัมพันธ์</option>
                  <option value="จัดซื้อจัดจ้าง">จัดซื้อจัดจ้าง</option>
                  <option value="ประกาศทั่วไป">ประกาศทั่วไป</option>
                </select>
              </div>

              {/* Main Content */}
              <div className="space-y-1.5">
                <label className="text-slate-600 font-bold">เนื้อหาข่าวสารแบบละเอียด <span className="text-rose-500">*</span></label>
                <textarea 
                  required
                  rows={8}
                  placeholder="เขียนรายละเอียดข่าวสาร..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-tcc-blue/15 focus:border-tcc-blue text-sm bg-slate-50/50 hover:bg-slate-50 resize-none"
                ></textarea>
              </div>

              {/* Image Upload / URL */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-150 space-y-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-tcc-blue" />
                  <span>ภาพประกอบหน้าข่าว (Image)</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Upload File */}
                  <div className="space-y-1.5">
                    <label className="text-slate-500 font-semibold">อัปโหลดไฟล์รูปภาพใหม่</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleImageFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="w-full border border-dashed border-slate-300 rounded-xl p-3.5 flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors text-slate-500">
                        {uploadingImage ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-tcc-blue" />
                            <span>กำลังอัปโหลด...</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4" />
                            <span>เลือกไฟล์ภาพ</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Paste URL */}
                  <div className="space-y-1.5">
                    <label className="text-slate-500 font-semibold">ลิงก์ URL รูปภาพ (ใช้แทนหรืออัปโหลดก็ได้)</label>
                    <div className="relative">
                      <Link2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        placeholder="https://example.com/image.jpg"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none text-xs"
                      />
                    </div>
                  </div>
                </div>

                {imageUrl && (
                  <div className="pt-2">
                    <p className="text-[10px] text-slate-400 mb-1">ภาพตัวอย่าง:</p>
                    <div className="w-32 h-20 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                      <img src={imageUrl} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
              </div>

              {/* Document PDF Upload / URL */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-150 space-y-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-tcc-amber" />
                  <span>ไฟล์เอกสารแนบ PDF (nullable)</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Upload File */}
                  <div className="space-y-1.5">
                    <label className="text-slate-500 font-semibold">อัปโหลดไฟล์ PDF ใหม่</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        accept="application/pdf"
                        onChange={handlePdfFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="w-full border border-dashed border-slate-300 rounded-xl p-3.5 flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors text-slate-500">
                        {uploadingFile ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-tcc-blue" />
                            <span>กำลังอัปโหลด...</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4" />
                            <span>เลือกไฟล์ PDF</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Paste URL */}
                  <div className="space-y-1.5">
                    <label className="text-slate-500 font-semibold">ลิงก์ URL ไฟล์เอกสาร (ใช้แทนหรืออัปโหลดก็ได้)</label>
                    <div className="relative">
                      <Link2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        placeholder="https://example.com/document.pdf"
                        value={fileUrl}
                        onChange={(e) => setFileUrl(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none text-xs"
                      />
                    </div>
                  </div>
                </div>

                {fileUrl && (
                  <div className="text-[10px] text-emerald-600 font-semibold">
                    ✓ แนบเอกสารสำเร็จ: {fileUrl.substring(0, 50)}...
                  </div>
                )}
              </div>

              {/* Save Buttons */}
              <div className="flex gap-4 pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={submitting || uploadingImage || uploadingFile}
                  className="flex-grow sm:flex-grow-0 bg-tcc-blue hover:bg-tcc-blue/90 text-white font-bold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>กำลังอัปเดต...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 text-tcc-gold" />
                      <span>บันทึกการเปลี่ยนแปลง</span>
                    </>
                  )}
                </button>
                <Link
                  href="/admin"
                  className="flex-grow sm:flex-grow-0 text-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors"
                >
                  ยกเลิก
                </Link>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  )
}
