import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/auth-helpers-nextjs'
import getSupabaseServer from '../../../../lib/supabaseServer'

export async function GET(){
  try{
    const supabaseAuth = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE!,
      {
        cookies: {
          getAll: () => cookies().getAll().map(cookie => ({ name: cookie.name, value: cookie.value })),
          setAll: () => undefined
        }
      }
    )
    const {
      data: { session }
    } = await supabaseAuth.auth.getSession()

    if(!session?.user) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
    }

    const seller_id = session.user.id
    const supabaseServer = getSupabaseServer()
    const { data: listings } = await supabaseServer.from('listings').select('id,title,base_price').eq('seller_id', seller_id)
    const listingIds = (listings || []).map((l:any)=>l.id)
    const { data: orders } = await supabaseServer.from('orders').select('id,listing_id,subtotal,seller_payout').in('listing_id', listingIds)

    const total_revenue = (orders || []).reduce((s:any,o:any)=>s + (o.seller_payout || 0), 0)
    const booked = (orders || []).length

    return NextResponse.json({ listings: listings || [], booked, total_revenue })
  }catch(err:any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
