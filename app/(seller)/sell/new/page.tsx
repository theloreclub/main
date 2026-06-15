'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../../../lib/supabase'
import type { Session } from '@supabase/supabase-js'
import UploadZone from '../../../../components/seller/UploadZone'
import PriceBuilder from '../../../../components/seller/PriceBuilder'

export default function NewListingPage(){
  const [session, setSession] = useState<Session | null>(null)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('bachelorette')
  const [destination, setDestination] = useState('')
  const [duration, setDuration] = useState<number | ''>('')
  const [groupSize, setGroupSize] = useState<number | ''>('')
  const [basePrice, setBasePrice] = useState<number>(29)
  const [heroPath, setHeroPath] = useState<string | undefined>(undefined)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
    })
  }, [])

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    if(!session) {
      setMessage('please sign in before listing a plan')
      return
    }

    setSubmitting(true)
    setMessage(null)
    const payload = {
      title,
      category,
      destination,
      duration_days: typeof duration === 'number' ? duration : null,
      group_size: typeof groupSize === 'number' ? groupSize : null,
      base_price: basePrice,
      description: '',
      hero_image_path: heroPath
    }

    const res = await fetch('/api/listings/create', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json()
    setSubmitting(false)
    if(!res.ok){
      setMessage(data.error || 'error')
      return
    }
    setMessage('listing saved (draft)')
  }

  return (
    <section className="max-w-3xl mx-auto py-12">
      <h1 className="text-2xl font-display lowercase-voice">turn your last trip into a listing</h1>
      {!session && <div className="mt-4 p-4 bg-ice-blue rounded text-sm text-dark">you need to sign in to create a listing.</div>}
      <form className="mt-6 flex flex-col gap-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-muted">title</label>
          <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full p-3 rounded border" placeholder="nashville, 4 days, 10 girls" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted">category</label>
            <select value={category} onChange={e=>setCategory(e.target.value)} className="w-full p-3 rounded border">
              <option value="bachelorette">bachelorette</option>
              <option value="family_vacation">family vacation</option>
              <option value="company_offsite">company off-site</option>
              <option value="honeymoon">honeymoon</option>
              <option value="friends_weekend">friends weekend</option>
              <option value="birthday">birthday</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-muted">destination</label>
            <input value={destination} onChange={e=>setDestination(e.target.value)} className="w-full p-3 rounded border" placeholder="nashville, tn" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-muted">duration (days)</label>
            <input value={duration as any} onChange={e=>setDuration(e.target.value ? Number(e.target.value) : '')} type="number" className="w-full p-3 rounded border" />
          </div>
          <div>
            <label className="block text-sm text-muted">group size</label>
            <input value={groupSize as any} onChange={e=>setGroupSize(e.target.value ? Number(e.target.value) : '')} type="number" className="w-full p-3 rounded border" />
          </div>
          <div>
            <PriceBuilder basePrice={basePrice} setBasePrice={setBasePrice} />
          </div>
        </div>

        <div>
          <label className="block text-sm text-muted">hero image / file</label>
          <UploadZone onUploaded={p=>setHeroPath(p)} />
        </div>

        <div>
          <button type="submit" className="px-4 py-2 rounded bg-lapis-blue text-white">{submitting ? 'saving…' : 'review + save (draft)'}</button>
          {message && <div className="mt-2 text-sm text-muted">{message}</div>}
        </div>
      </form>
    </section>
  )
}
