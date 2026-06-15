import React from 'react'

type Props = { params: { id: string } }

export default async function ListingPage({ params }: Props){
  const id = params.id
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/listings/${id}`)
  const json = await res.json()
  const listing = json.listing

  if(!listing) return <div className="p-8">listing not found</div>

  return (
    <section className="max-w-5xl mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="h-64 bg-pale-blue rounded mb-4" />
          <div className="text-sm text-muted">{listing.category}</div>
          <h1 className="text-2xl font-semibold mt-2">{listing.title}</h1>
          <div className="mt-4 text-muted">{listing.description}</div>
        </div>
        <aside className="lg:col-span-1 card">
          <div className="text-sm text-muted">base plan</div>
          <div className="text-2xl font-display mt-2">${listing.base_price}</div>
          <button className="mt-4 px-4 py-2 rounded bg-lapis-blue text-white w-full">add to cart</button>
        </aside>
      </div>
    </section>
  )
}
