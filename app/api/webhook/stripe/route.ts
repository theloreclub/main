import { NextResponse } from 'next/server'
import getStripe from '../../../../lib/stripe'
import supabaseServer from '../../../../lib/supabaseServer'

export async function POST(req: Request){
  const stripe = getStripe()
  const payload = await req.text()
  const sig = (req.headers.get('stripe-signature') || '')
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

  let event: any
  try{
    if(webhookSecret){
      event = stripe.webhooks.constructEvent(payload, sig, webhookSecret)
    } else {
      event = JSON.parse(payload)
    }
  }catch(err:any){
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  if(event.type === 'checkout.session.completed'){
    const session = event.data.object
    const listing_id = session.metadata?.listing_id || null
    const buyer_id = session.metadata?.buyer_id || null
    const amount_total = session.amount_total / 100.0

    // create order record
    await supabaseServer.from('orders').insert({
      buyer_id,
      listing_id,
      subtotal: amount_total,
      platform_fee: Math.round(amount_total * 0.15 * 100) / 100,
      seller_payout: Math.round(amount_total * 0.85 * 100) / 100,
      stripe_session_id: session.id,
      status: 'paid'
    })

    // TODO: send email, unlock storage, create message thread, queue payout
  }

  return NextResponse.json({ received: true })
}
