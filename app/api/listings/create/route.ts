import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/auth-helpers-nextjs'
import getSupabaseServer from '../../../../lib/supabaseServer'
import { ListingCreateBody } from '../../../../lib/types'

export async function POST(req: Request){
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

    const body = await req.json() as ListingCreateBody
    if(!body.title || !body.category || !body.base_price) {
      return NextResponse.json({ error: 'missing fields' }, { status: 400 })
    }

    const seller_id = session.user.id
    const supabaseServer = getSupabaseServer()
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
