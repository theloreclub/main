import React from 'react'

type Props = { params: { id: string } }

export default async function OrderPage({ params }: Props){
  const id = params.id
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/orders/${id}`)
  const json = await res.json()
  const order = json.order

  if(!order) return <div className="p-8">order not found</div>

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark text-white p-8">
      <div className="max-w-3xl bg-[#11121a] rounded p-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">✓</div>
          <div>
            <h2 className="text-2xl font-bold">you got the plan.</h2>
            <div className="text-sm text-muted">order #{order.id} · receipt sent</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="card">
            <h3 className="font-semibold">your purchase</h3>
            <div className="mt-2 text-sm">{order.listing?.title} · @{order.listing?.seller_id}</div>
            <div className="mt-4 text-sm">subtotal: ${order.subtotal}</div>
            <div className="text-sm">total: ${order.subtotal}</div>
          </div>

          <div className="card">
            <h3 className="font-semibold">next 4 things to do</h3>
            <ol className="mt-2 list-decimal ml-4 text-sm">
              <li>set your trip dates</li>
              <li>invite the group</li>
              <li>sync to google calendar</li>
              <li>open trip dashboard</li>
            </ol>
            <button className="mt-4 px-4 py-2 rounded bg-lapis-blue text-white">open trip dashboard</button>
          </div>
        </div>

        <div className="mt-6 bg-[#0f1724] p-4 rounded">
          <div className="text-sm">message @{order.listing?.seller_id} anytime for the next 14 days</div>
          <button className="mt-2 px-3 py-1 rounded bg-royal-blue text-white">say hi →</button>
        </div>
      </div>
    </section>
  )
}
