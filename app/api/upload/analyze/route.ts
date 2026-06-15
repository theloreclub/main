import { NextResponse } from 'next/server'
import parseItinerary from '../../../../lib/claude'

export async function POST(req: Request){
  try{
    const { text } = await req.json()
    if(!text) return NextResponse.json({ error: 'missing text' }, { status: 400 })

    const parsed = await parseItinerary(text)
    return NextResponse.json({ parsed })
  }catch(err:any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
