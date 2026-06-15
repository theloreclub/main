import React from 'react'

export default function BrowsePage(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-display lowercase-voice">browse</h1>
      <div className="mt-4 flex gap-3">
        <button className="px-3 py-1 rounded bg-ice-blue lowercase-voice">all</button>
        <button className="px-3 py-1 rounded bg-pale-blue lowercase-voice">bachelorette</button>
        <button className="px-3 py-1 rounded bg-pale-blue lowercase-voice">family vacation</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="card">
          <div className="h-40 bg-ice-blue rounded mb-3" />
          <div className="text-sm text-muted">bachelorette</div>
          <h4 className="font-semibold">nashville, 4 days, 10 girls</h4>
          <div className="mt-2 text-sm text-muted">@jess · 120 booked · ★4.9 · $29</div>
        </div>
      </div>
    </section>
  )
}
