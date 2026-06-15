'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  compact?: boolean
  defaults?: {
    occasion?: string
    destination?: string
    groupSize?: string
    days?: string
    budget?: string
  }
}

export default function TripBriefForm({ compact = false, defaults = {} }: Props) {
  const router = useRouter()
  const [occasion, setOccasion] = useState(defaults.occasion || '')
  const [destination, setDestination] = useState(defaults.destination || '')
  const [groupSize, setGroupSize] = useState(defaults.groupSize || '')
  const [days, setDays] = useState(defaults.days || '')
  const [budget, setBudget] = useState(defaults.budget || '')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const params = new URLSearchParams()
    if (occasion) params.set('occasion', occasion)
    if (destination) params.set('destination', destination)
    if (groupSize) params.set('groupSize', groupSize)
    if (days) params.set('days', days)
    if (budget) params.set('budget', budget)
    router.push(`/browse?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'trip-brief trip-brief-compact' : 'trip-brief'}>
      <label className="trip-field">
        <span>Occasion</span>
        <select value={occasion} onChange={(event) => setOccasion(event.target.value)}>
          <option value="">Choose one</option>
          <option value="bachelorette">Bachelorette</option>
          <option value="birthday">Birthday</option>
          <option value="friends trip">Friends&apos; trip</option>
          <option value="family reunion">Family reunion</option>
          <option value="company off-site">Company off-site</option>
          <option value="wedding weekend">Wedding weekend</option>
        </select>
      </label>

      <label className="trip-field">
        <span>Destination</span>
        <input
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          placeholder="City or not sure yet"
        />
      </label>

      <label className="trip-field">
        <span>Group</span>
        <select value={groupSize} onChange={(event) => setGroupSize(event.target.value)}>
          <option value="">Any size</option>
          <option value="4">2-4 people</option>
          <option value="8">5-8 people</option>
          <option value="12">9-12 people</option>
          <option value="16">13+ people</option>
        </select>
      </label>

      <label className="trip-field">
        <span>Length</span>
        <select value={days} onChange={(event) => setDays(event.target.value)}>
          <option value="">Any length</option>
          <option value="2">2 days</option>
          <option value="3">3 days</option>
          <option value="4">4 days</option>
          <option value="5">5+ days</option>
        </select>
      </label>

      <label className="trip-field">
        <span>Per-person budget</span>
        <select value={budget} onChange={(event) => setBudget(event.target.value)}>
          <option value="">Any budget</option>
          <option value="400">Under $400</option>
          <option value="700">Under $700</option>
          <option value="1000">Under $1,000</option>
          <option value="1500">$1,000+</option>
        </select>
      </label>

      <button type="submit" className="primary-button trip-submit">
        Find trips that worked
      </button>
    </form>
  )
}

