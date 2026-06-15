import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/auth-helpers-nextjs'

export async function GET(){
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    {
      cookies: {
        getAll: () => cookies().getAll().map(cookie => ({ name: cookie.name, value: cookie.value })),
        setAll: () => undefined
      }
    }
  )
  const { data: { session }, error } = await supabase.auth.getSession()
  if(error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ session })
}
