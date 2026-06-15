import { NextResponse } from 'next/server'
import supabaseServer from '../../../../lib/supabaseServer'

export async function GET(req: Request, { params }: { params: { orderId: string } }){
  try{
    const orderId = params.orderId
    const { data, error } = await supabaseServer.from('messages').select('*').eq('order_id', orderId).order('created_at', { ascending: true })
    if(error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ messages: data })
  }catch(err:any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
