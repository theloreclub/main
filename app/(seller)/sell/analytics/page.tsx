import React from 'react'

type Props = { searchParams?: { seller_id?: string } }

export default async function AnalyticsPage({ searchParams }: Props){
  const seller_id = searchParams?.seller_id || ''
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/seller/analytics?seller_id=${seller_id}`)
  const json = await res.json()
  if(json.error) return <div className="p-8">{json.error}</div>

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-display">analytics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-ice-blue rounded">
          <div className="text-sm text-muted">listings</div>
          <div className="text-2xl">{json.listings.length}</div>
        </div>
        <div className="p-4 bg-ice-blue rounded">
          <div className="text-sm text-muted">booked</div>
          <div className="text-2xl">{json.booked}</div>
        </div>
        <div className="p-4 bg-ice-blue rounded">
          <div className="text-sm text-muted">your take</div>
          <div className="text-2xl">${json.total_revenue.toFixed(2)}</div>
        </div>
      </div>
    </section>
  )
}
