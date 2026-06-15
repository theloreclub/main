import React from 'react'

type Props = { params: { handle: string } }

export default async function CreatorPage({ params }: Props){
  const handle = params.handle
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/creators/${handle}`)
  const json = await res.json()
  const user = json.user
  const listings = json.listings || []

  if(!user) return <div className="p-8">creator not found</div>

  return (
    <section className="max-w-6xl mx-auto p-8">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-pale-blue flex items-center justify-center">{user.display_name ? user.display_name[0] : user.handle[1]}</div>
        <div>
          <h2 className="text-2xl font-display">{user.display_name || user.handle}</h2>
          <div className="text-sm text-muted">@{user.handle} · {user.location}</div>
        </div>
      </div>

      <section className="mt-8">
        <h3 className="text-lg">listings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {listings.map((l:any)=> (
            <div key={l.id} className="card">
              <div className="h-36 bg-ice-blue rounded mb-2" />
              <div className="text-sm text-muted">{l.category}</div>
              <h4 className="font-semibold">{l.title}</h4>
              <div className="mt-2 text-sm text-muted">${l.base_price}</div>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
