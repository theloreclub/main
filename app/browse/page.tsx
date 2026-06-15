import React from 'react'
import Image from 'next/image'

export default function BrowsePage(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold lowercase-voice tracking-tight text-dark">find your plan.</h1>
        <p className="mt-2 text-muted text-sm">real trips from real people. sorted by what actually worked.</p>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        <button className="px-4 py-2 rounded-full bg-lapis-blue text-white text-sm font-medium lowercase-voice">everything</button>
        <button className="px-4 py-2 rounded-full bg-white border border-ice-blue text-sm text-muted hover:border-lapis-blue hover:text-lapis-blue transition-colors lowercase-voice">bachelorette</button>
        <button className="px-4 py-2 rounded-full bg-white border border-ice-blue text-sm text-muted hover:border-lapis-blue hover:text-lapis-blue transition-colors lowercase-voice">family vacation</button>
        <button className="px-4 py-2 rounded-full bg-white border border-ice-blue text-sm text-muted hover:border-lapis-blue hover:text-lapis-blue transition-colors lowercase-voice">work off-site</button>
        <button className="px-4 py-2 rounded-full bg-white border border-ice-blue text-sm text-muted hover:border-lapis-blue hover:text-lapis-blue transition-colors lowercase-voice">birthday weekend</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="card overflow-hidden p-0 group cursor-pointer">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=600&q=80"
              alt="Nashville bachelorette"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-lapis-blue">bachelorette</span>
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-dark">nashville, 4 days, 10 girls</h4>
            <p className="text-xs text-muted mt-1">honky tonks, hot chicken, no one cried. well, once.</p>
            <div className="mt-3 flex items-center justify-between text-sm text-muted">
              <span>@jess · ★4.9 · 120 bought this</span>
              <span className="font-semibold text-dark">$29</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
