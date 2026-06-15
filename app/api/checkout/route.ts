import { NextResponse } from 'next/server'
import getStripe from '../../../lib/stripe'

export async function POST(req: Request){
  try{
    const body = await req.json()
    const { listing_id, buyer_id, items } = body
    if(!listing_id || !items) return NextResponse.json({ error: 'missing' }, { status: 400 })

    const stripe = getStripe()
    const line_items = items.map((it: any) => ({ price_data: { currency: 'usd', product_data: { name: it.name }, unit_amount: Math.round(it.price * 100) }, quantity: 1 }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/order/cancel`,
      metadata: { listing_id, buyer_id: buyer_id || '' }
    })

    return NextResponse.json({ url: session.url })
  }catch(err:any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
