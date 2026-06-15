import Stripe from 'stripe'

export function getStripe(){
  const key = process.env.STRIPE_SECRET_KEY || ''
  return new Stripe(key, { apiVersion: '2024-08-14' })
}

export default getStripe
