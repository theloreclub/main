import React from 'react'
import Image from 'next/image'
import LoreLogo from '../components/ui/LoreLogo'

export default function Home(){
  return (
    <>
      {/* Hero */}
      <div className="hero-gradient">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <LoreLogo size={52} />
              </div>
              <h1 className="text-5xl font-display font-bold lowercase-voice leading-[1.1] tracking-tight text-dark">
                someone already nailed it. now you can just go.
              </h1>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                skip the 47-tab spiral. buy the exact playbook from someone who already pulled it off — and actually had a good time.
              </p>
              <div className="mt-8 flex gap-3">
                <input
                  className="flex-1 px-4 py-3 rounded-2xl border border-indigo-blue/20 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-lapis-blue text-sm placeholder:text-muted"
                  placeholder="nashville bachelorette, 4 days, 8 people…"
                />
                <button className="px-5 py-3 rounded-2xl bg-lapis-blue text-white text-sm font-medium hover:bg-royal-blue transition-colors shadow-sm">
                  find it
                </button>
              </div>
              <p className="mt-4 text-xs text-muted">bachelorettes · family trips · off-sites · birthday weekends · and everything in between</p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-72 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1A3FCF 0%, #4338CA 100%)' }}>
                <LoreLogo size={88} variant="white" showWordmark={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social proof strip */}
      <div className="border-y border-ice-blue bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-8 text-sm text-muted overflow-x-auto">
          <span className="whitespace-nowrap">✦ 1,200+ plans sold</span>
          <span className="whitespace-nowrap">✦ avg. ★4.8 rating</span>
          <span className="whitespace-nowrap">✦ bachelorettes · family trips · off-sites</span>
          <span className="whitespace-nowrap">✦ real people, real trips</span>
        </div>
      </div>

      {/* Trending */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">what's working right now</span>
          <div className="flex-1 h-px bg-ice-blue" />
          <a href="/browse" className="text-xs text-lapis-blue hover:underline whitespace-nowrap">see all →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card overflow-hidden p-0 group cursor-pointer">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80"
                alt="Bachelorette group celebrating together"
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

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #1A3FCF 0%, #4338CA 100%)' }}>
          <h2 className="text-2xl font-display font-bold lowercase-voice text-white tracking-tight">you've been on 14 tabs for 3 hours.</h2>
          <p className="mt-3 text-white/70 text-sm">close them. someone already did this part.</p>
          <a href="/browse" className="inline-block mt-6 px-8 py-3 rounded-2xl bg-white text-lapis-blue font-semibold text-sm hover:bg-ice-blue transition-colors">
            find your plan →
          </a>
        </div>
      </div>
    </>
  )
}
