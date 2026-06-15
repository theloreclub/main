import { NextResponse } from 'next/server'
import getSupabaseServer from '../../../../lib/supabaseServer'

export async function GET(req: Request, { params }: { params: { handle: string } }){
  try{
    const supabaseServer = getSupabaseServer()
    const handle = params.handle
    const { data: user, error: userErr } = await supabaseServer.from('users').select('*').eq('handle', handle).single()
    if(userErr) return NextResponse.json({ error: userErr.message }, { status: 404 })

    const { data: listings, error: listingsErr } = await supabaseServer.from('listings').select('*').eq('seller_id', user.id).order('created_at', { ascending: false })
    if(listingsErr) return NextResponse.json({ error: listingsErr.message }, { status: 500 })

    return NextResponse.json({ user, listings })
  }catch(err:any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
