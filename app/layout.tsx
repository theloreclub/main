import '../styles/globals.css'
import React from 'react'
import type { ReactNode } from 'react'
import LoreLogo from '../components/ui/LoreLogo'

export const metadata = {
  title: 'lore — someone already planned it.',
  description: 'buy real itineraries from people who pulled it off.'
}

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en">
      <body>
        <header className="bg-dark text-white py-3">
          <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
            <a href="/" className="flex items-center">
              <LoreLogo variant="white" size={36} />
            </a>
            <nav className="flex items-center gap-4 text-sm">
              <a href="/browse" className="opacity-80 hover:opacity-100 lowercase-voice">browse</a>
              <a href="/how-it-works" className="opacity-80 hover:opacity-100 lowercase-voice">how it works</a>
              <a href="/sign-in" className="opacity-80 hover:opacity-100 lowercase-voice">sign in</a>
              <a href="/sell/new" className="px-4 py-2 rounded bg-lapis-blue text-white lowercase-voice hover:bg-royal-blue transition-colors">list your plan</a>
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
