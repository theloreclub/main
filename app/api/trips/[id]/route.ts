import { NextResponse } from 'next/server'
import supabaseServer from '../../../../lib/supabaseServer'

export async function GET(req: Request, { params }: { params: { id: string } }){
  try{
    const id = params.id
    const { data, error } = await supabaseServer.from('trips').select('*').eq('id', id).single()
    if(error) return NextResponse.json({ error: error.message }, { status: 404 })
    return NextResponse.json({ trip: data })
  }catch(err:any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
