'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CheckoutButton({ listingId }: { listingId: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function startCheckout() {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ listing_id: listingId })
      })
      const data = await response.json()

      if (response.status === 401) {
        router.push(`/sign-in?next=${encodeURIComponent(`/listing/${listingId}`)}`)
        return
      }
      if (!response.ok || !data.url) {
        throw new Error(data.error || 'Checkout is not available for this plan yet.')
      }

      window.location.href = data.url
    } catch (checkoutError: any) {
      setError(checkoutError.message)
      setLoading(false)
    }
  }

  return (
    <div>
      <button type="button" className="primary-button w-full" onClick={startCheckout} disabled={loading}>
        {loading ? 'Opening secure checkout...' : 'Use this plan'}
      </button>
      {error && <p className="form-error mt-3">{error}</p>}
    </div>
  )
}

