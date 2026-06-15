import { NextResponse } from 'next/server'
import supabaseServer from '../../../lib/supabaseServer'

export async function POST(req: Request){
  try{
    const { order_id, sender_id, body } = await req.json()
    if(!order_id || !sender_id || !body) return NextResponse.json({ error: 'missing' }, { status: 400 })

    const { data, error } = await supabaseServer.from('messages').insert({ order_id, sender_id, body }).select().single()
    if(error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ message: data })
  }catch(err:any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
