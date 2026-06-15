import Stripe from 'stripe'

export function getStripe(){
  const key = process.env.STRIPE_SECRET_KEY || ''
  return new Stripe(key, { apiVersion: '2022-11-15' })
}

export default getStripe
