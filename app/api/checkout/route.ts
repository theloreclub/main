import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/auth-helpers-nextjs'
import getSupabaseServer from '../../../lib/supabaseServer'
import getStripe from '../../../lib/stripe'

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

    const body = await req.json()
    const { listing_id, items } = body
    if(!listing_id || !items) return NextResponse.json({ error: 'missing' }, { status: 400 })

    const stripe = getStripe()
    const line_items = items.map((it: any) => ({ price_data: { currency: 'usd', product_data: { name: it.name }, unit_amount: Math.round(it.price * 100) }, quantity: 1 }))

    const supabaseServer = getSupabaseServer()
    const checkoutSession = await stripe.checkout.sessions.create({
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/order/cancel`,
      metadata: { listing_id, buyer_id: session.user.id }
    })

    return NextResponse.json({ url: checkoutSession.url })
  }catch(err:any){
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
