import React from 'react'
import LoreLogo from '../components/ui/LoreLogo'

export default function Home(){
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="mb-6">
            <LoreLogo size={52} />
          </div>
          <h1 className="text-4xl font-display lowercase-voice leading-tight">someone already planned the perfect trip.</h1>
          <p className="mt-4 text-muted">buy real itineraries from people who pulled it off — bachelorettes, family vacations, off-sites, birthday weekends.</p>
          <div className="mt-6">
            <input className="w-full p-3 rounded border border-ice-blue focus:outline-none focus:ring-2 focus:ring-lapis-blue" placeholder="→ nashville bachelorette, 4 days, 8 people" />
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full h-64 bg-ice-blue rounded-xl flex items-center justify-center">
            <LoreLogo size={72} showWordmark={false} />
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h3 className="text-sm uppercase text-muted">trending plans</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <div className="card">
            <div className="h-40 bg-pale-blue rounded mb-3" />
            <div className="text-sm text-muted">bachelorette</div>
            <h4 className="font-semibold">nashville, 4 days, 10 girls</h4>
            <div className="mt-2 text-sm text-muted">@jess · 120 booked · ★4.9 · $29</div>
          </div>
        </div>
      </section>
    </section>
  )
}
