'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/auth-helpers-nextjs'
import type { SupabaseClient, Session } from '@supabase/supabase-js'

type SupabaseContext = { supabase: SupabaseClient; session: Session | null }

const Context = createContext<SupabaseContext | undefined>(undefined)

export function useSupabase() {
  const ctx = useContext(Context)
  if (!ctx) throw new Error('useSupabase must be used inside Providers')
  return ctx
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() =>
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  )
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => subscription.unsubscribe()
  }, [supabase])

  return <Context.Provider value={{ supabase, session }}>{children}</Context.Provider>
}
