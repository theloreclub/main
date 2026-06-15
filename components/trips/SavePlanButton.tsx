'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'lore-saved-plans'

export default function SavePlanButton({ listingId }: { listingId: string }) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const ids = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]') as string[]
    setSaved(ids.includes(listingId))
  }, [listingId])

  function toggleSaved() {
    const ids = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]') as string[]
    const next = ids.includes(listingId) ? ids.filter((id) => id !== listingId) : [...ids, listingId]
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setSaved(next.includes(listingId))
  }

  return (
    <button type="button" className="secondary-button w-full" onClick={toggleSaved}>
      {saved ? 'Saved to your shortlist' : 'Save for later'}
    </button>
  )
}
