import { NextResponse } from 'next/server'
import supabaseServer from '../../../../lib/supabaseServer'

export async function GET(req: Request){
  try{
    const url = new URL(req.url)
    const seller_id = url.searchParams.get('seller_id')
    if(!seller_id) return NextResponse.json({ error: 'missing seller_id' }, { status: 400 })

    const { data: listings } = await supabaseServer.from('listings').select('id,title,base_price').eq('seller_id', seller_id)
    const { data: orders } = await supabaseServer.from('orders').select('id,listing_id,subtotal,seller_payout').in('listing_id', listings.map((l:any)=>l.id))

    const total_revenue = (orders || []).reduce((s:any,o:any)=>s + (o.seller_payout || 0), 0)
    const booked = (orders || []).length

    return NextResponse.json({ listings: listings || [], booked, total_revenue })
  }catch(err:any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
