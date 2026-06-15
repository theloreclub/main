'use client'
import React, { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function UploadZone({ onUploaded }: { onUploaded?: (path: string)=>void }){
  const [uploading, setUploading] = useState(false)
  const [name, setName] = useState<string | null>(null)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>){
    const file = e.target.files?.[0]
    if(!file) return
    setUploading(true)
    const id = `${Date.now()}-${file.name}`
    const { data, error } = await supabase.storage.from('uploads').upload(id, file)
    setUploading(false)
    if(error){
      console.error(error)
      return
    }
    setName(data.path)
    onUploaded?.(data.path)
  }

  return (
    <div className="border-2 border-dashed rounded p-4">
      <label className="flex flex-col items-center gap-2">
        <div className="w-full h-32 bg-pale-blue rounded flex items-center justify-center">{ uploading ? 'uploading…' : 'drop or choose a file' }</div>
        <input type="file" onChange={handleFile} className="hidden" />
      </label>
      {name && <div className="text-sm text-muted mt-2">uploaded: {name}</div> }
    </div>
  )
}
