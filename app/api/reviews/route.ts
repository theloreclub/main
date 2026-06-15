import { NextResponse } from 'next/server'
import getSupabaseServer from '../../../lib/supabaseServer'

export async function POST(req: Request){
  try{
    const supabaseServer = getSupabaseServer()
    const { listing_id, order_id, reviewer_id, rating, body } = await req.json()
    if(!listing_id || !order_id || !reviewer_id || !rating) return NextResponse.json({ error: 'missing' }, { status: 400 })

    const { data, error } = await supabaseServer.from('reviews').insert({ listing_id, order_id, reviewer_id, rating, body }).select().single()
    if(error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ review: data })
  }catch(err:any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function GET(req: Request){
  try{
    const supabaseServer = getSupabaseServer()
    const url = new URL(req.url)
    const listing_id = url.searchParams.get('listing_id')
    if(!listing_id) return NextResponse.json({ error: 'missing listing_id' }, { status: 400 })
    const { data, error } = await supabaseServer.from('reviews').select('*').eq('listing_id', listing_id).order('created_at', { ascending: false })
    if(error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ reviews: data })
  }catch(err:any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
