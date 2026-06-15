import { NextResponse } from 'next/server'
import supabaseServer from '../../../../lib/supabaseServer'
import { ListingCreateBody } from '../../../../lib/types'

export async function POST(req: Request){
  try{
    const body = await req.json() as ListingCreateBody
    if(!body.title || !body.category || !body.base_price) {
      return NextResponse.json({ error: 'missing fields' }, { status: 400 })
    }

    // For now assume seller is authenticated and seller_id supplied in body
    // In production use server auth to get user id from cookie/session
    const seller_id = (body as any).seller_id || null

    const { data, error } = await supabaseServer.from('listings').insert({
      seller_id,
      title: body.title,
      category: body.category,
      destination: body.destination || null,
      duration_days: body.duration_days || null,
      group_size: body.group_size || null,
      vibe_tags: body.vibe_tags || [],
      description: body.description || null,
      hero_image_url: body.hero_image_path || null,
      status: 'draft',
      base_price: body.base_price,
      view_count: 0
    }).select().single()

    if(error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ listing: data })
  }catch(err: any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
