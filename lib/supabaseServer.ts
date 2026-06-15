import { createClient } from '@supabase/supabase-js'

const getSupabaseServer = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

  if(!url || !serviceRole){
    throw new Error('supabaseKey is required.')
  }

  return createClient(url, serviceRole)
}

export default getSupabaseServer
