import '../styles/globals.css'
import React from 'react'
import type { ReactNode } from 'react'
import LoreLogo from '../components/ui/LoreLogo'
import Providers from './providers'

export const metadata = {
  title: 'lore — someone already planned it.',
  description: 'skip the 47-tab spiral. buy a plan from someone who already nailed it.'
}

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="bg-dark/95 backdrop-blur-md text-white py-4 sticky top-0 z-50 border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
              <a href="/" className="flex items-center">
                <LoreLogo variant="white" size={34} />
              </a>
              <nav className="flex items-center gap-6 text-sm">
                <a href="/browse" className="opacity-70 hover:opacity-100 lowercase-voice transition-opacity">explore</a>
                <a href="/how-it-works" className="opacity-70 hover:opacity-100 lowercase-voice transition-opacity">how it works</a>
                <a href="/sign-in" className="opacity-70 hover:opacity-100 lowercase-voice transition-opacity">sign in</a>
                <a href="/sell/new" className="px-4 py-2 rounded-xl bg-lapis-blue text-white text-sm lowercase-voice hover:bg-royal-blue transition-colors shadow-sm">sell your plan</a>
              </nav>
            </div>
          </header>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
