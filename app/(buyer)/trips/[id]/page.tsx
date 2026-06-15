import React from 'react'

type Props = { params: { id: string } }

export default async function TripPage({ params }: Props){
  const id = params.id
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/trips/${id}`)
  const json = await res.json()
  const trip = json.trip

  if(!trip) return <div className="p-8">trip not found</div>

  const days = trip.day_plan || [{ day: 1, title: 'day 1', items: [] }]

  return (
    <section className="min-h-screen bg-dark text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm lowercase-voice">{trip.category || 'bachelorette'}</div>
            <h1 className="text-2xl font-display">{trip.trip_name || 'your trip'}</h1>
            <div className="text-sm text-muted">{trip.headcount || '—'} · {trip.trip_dates || ''}</div>
          </div>
          <div>
            <button className="px-3 py-1 rounded bg-royal-blue">share</button>
            <button className="ml-2 px-3 py-1 rounded bg-pale-blue text-dark">export pdf</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex gap-2 mb-4">
              {days.map((d:any)=> (
                <div key={d.day} className="px-3 py-2 bg-[#0f1724] rounded">day {d.day} · {d.title}</div>
              ))}
            </div>

            <div className="space-y-4">
              {days.flatMap((d:any)=> d.items || []).map((it:any, idx:number)=> (
                <div key={idx} className="p-4 bg-[#0b1220] rounded">
                  <div className="text-sm">{it.time} · {it.name}</div>
                  <div className="text-xs text-muted">{it.type} · {it.address}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="p-4 bg-[#0b1220] rounded">
            <h3 className="font-semibold">vendors unlocked</h3>
            <div className="mt-2 text-sm text-muted">{(trip.vendors && trip.vendors.length) || 0} contacts</div>
            <div className="mt-4">
              <h4 className="font-semibold">budget tracker</h4>
              <div className="text-sm">$ {(trip.budget_actuals && trip.budget_actuals.total) || 0} / person</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
