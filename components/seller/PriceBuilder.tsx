'use client'
import React from 'react'

export default function PriceBuilder({ basePrice, setBasePrice }: { basePrice: number, setBasePrice: (v:number)=>void }){
  return (
    <div className="p-4 rounded bg-ice-blue">
      <label className="block text-sm text-muted">base price</label>
      <div className="mt-2 flex items-center gap-2">
        <input type="number" value={basePrice} onChange={e=>setBasePrice(Number(e.target.value))} className="p-2 rounded border w-28" />
        <div className="text-sm">usd</div>
      </div>
    </div>
  )
}
