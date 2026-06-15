import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if(!url || !anon){
  // it's ok for local dev; ensure env vars are set in deployment
}

export const supabase = createClient(url, anon)
