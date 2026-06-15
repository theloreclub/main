'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useSupabase } from '../../app/providers'
import LoreLogo from './LoreLogo'

export default function SiteHeader() {
  const { session, supabase } = useSupabase()
  const [open, setOpen] = useState(false)

  async function handleSignOut() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" aria-label="The Lore Club home">
          <LoreLogo variant="white" size={32} />
        </Link>

        <button type="button" className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
          Menu
        </button>

        <nav className={open ? 'site-nav site-nav-open' : 'site-nav'}>
          <Link href="/browse">Find a trip</Link>
          <Link href="/how-it-works">How it works</Link>
          {session && <Link href="/my-trips">My trips</Link>}
          {session && <Link href="/sell/analytics">Creator dashboard</Link>}
          {!session && <Link href="/sign-in">Sign in</Link>}
          {session && (
            <button type="button" className="nav-text-button" onClick={handleSignOut}>
              Sign out
            </button>
          )}
          <Link href="/sell" className="nav-cta">
            Sell a trip
          </Link>
        </nav>
      </div>
    </header>
  )
}

