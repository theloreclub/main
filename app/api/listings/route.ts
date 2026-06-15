import { NextResponse } from 'next/server'
import supabaseServer from '../../../lib/supabaseServer'

export async function GET(req: Request){
  try{
    const url = new URL(req.url)
    const params = url.searchParams
    const category = params.get('category')

    let query = supabaseServer.from('listings').select('*').order('created_at', { ascending: false })
    if(category){
      query = query.eq('category', category)
    }
    const { data, error } = await query
    if(error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ listings: data })
  }catch(err: any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
