export type TripPlan = {
  id: string
  title: string
  destination: string
  category: string
  durationDays: number
  groupMin: number
  groupMax: number
  estimatedPerPerson: number
  basePrice: number
  rating: number
  completedTrips: number
  lastVerified: string
  creatorHandle: string
  creatorName: string
  creatorLocation: string
  imageUrl: string
  summary: string
  proofLabel: string
  pace: string
  nightlife: string
  bestFor: string[]
  notFor: string[]
  included: string[]
  highlights: Array<{
    day: number
    title: string
    items: string[]
  }>
  budget: Array<{
    label: string
    amount: number
  }>
}

export const demoTrips: TripPlan[] = [
  {
    id: 'nashville-bachelorette',
    title: 'Nashville, 4 days, 10 friends',
    destination: 'Nashville, Tennessee',
    category: 'bachelorette',
    durationDays: 4,
    groupMin: 8,
    groupMax: 12,
    estimatedPerPerson: 785,
    basePrice: 29,
    rating: 4.9,
    completedTrips: 120,
    lastVerified: 'May 2026',
    creatorHandle: 'jessplans',
    creatorName: 'Jess Morgan',
    creatorLocation: 'Austin, Texas',
    imageUrl: 'https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=1200&q=85',
    summary: 'Honky-tonks, a private brunch, one excellent group dinner, and enough breathing room to actually enjoy the weekend.',
    proofLabel: 'Trip proven',
    pace: 'Lively, with recovery time',
    nightlife: 'High',
    bestFor: ['Groups of 8-12', 'First-time Nashville visitors', 'A social weekend without nonstop scheduling'],
    notFor: ['Quiet wellness weekends', 'Groups avoiding nightlife', 'Trips with young children'],
    included: ['Editable 4-day schedule', 'Map with travel times', 'Restaurant and activity alternatives', 'Group budget and booking checklist'],
    highlights: [
      { day: 1, title: 'Settle in', items: ['Group check-in plan', 'Welcome drinks', 'Dinner near the house'] },
      { day: 2, title: 'The big Nashville day', items: ['Private brunch', 'Broadway route', 'Dinner reservation strategy'] },
      { day: 3, title: 'Slow morning, strong finish', items: ['Coffee and recovery', 'Neighborhood afternoon', 'Final night activity'] },
      { day: 4, title: 'Easy exit', items: ['Breakfast options', 'Checkout checklist', 'Airport timing'] }
    ],
    budget: [
      { label: 'Stay', amount: 390 },
      { label: 'Food and drinks', amount: 195 },
      { label: 'Activities', amount: 145 },
      { label: 'Local transport', amount: 55 }
    ]
  },
  {
    id: 'palm-springs-birthday',
    title: 'Palm Springs birthday house weekend',
    destination: 'Palm Springs, California',
    category: 'birthday',
    durationDays: 3,
    groupMin: 6,
    groupMax: 10,
    estimatedPerPerson: 620,
    basePrice: 24,
    rating: 4.8,
    completedTrips: 64,
    lastVerified: 'April 2026',
    creatorHandle: 'milaaway',
    creatorName: 'Mila Chen',
    creatorLocation: 'Los Angeles, California',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85',
    summary: 'A design-forward house weekend with one planned night out, a pool day, and a realistic grocery and drinks budget.',
    proofLabel: 'Trip proven',
    pace: 'Relaxed',
    nightlife: 'Medium',
    bestFor: ['Birthday groups', 'Pool-focused weekends', 'Groups driving from Southern California'],
    notFor: ['Travelers without a car plan', 'Packed sightseeing schedules', 'Cold-weather travel'],
    included: ['Editable 3-day schedule', 'House selection checklist', 'Grocery plan', 'Dinner and transport alternatives'],
    highlights: [
      { day: 1, title: 'Arrive and stock up', items: ['House check-in', 'Grocery split', 'At-home dinner'] },
      { day: 2, title: 'Pool and birthday night', items: ['Pool setup', 'Group activity', 'Dinner and drinks'] },
      { day: 3, title: 'Brunch and reset', items: ['Late brunch', 'Optional spa', 'Departure plan'] }
    ],
    budget: [
      { label: 'Stay', amount: 350 },
      { label: 'Food and drinks', amount: 130 },
      { label: 'Activities', amount: 90 },
      { label: 'Local transport', amount: 50 }
    ]
  },
  {
    id: 'lisbon-friends',
    title: 'Lisbon long weekend for food-loving friends',
    destination: 'Lisbon, Portugal',
    category: 'friends trip',
    durationDays: 4,
    groupMin: 4,
    groupMax: 8,
    estimatedPerPerson: 540,
    basePrice: 34,
    rating: 4.9,
    completedTrips: 38,
    lastVerified: 'June 2026',
    creatorHandle: 'roamwithnoah',
    creatorName: 'Noah Silva',
    creatorLocation: 'Lisbon, Portugal',
    imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=85',
    summary: 'A walkable food-first plan with neighborhood logic, reservation timing, and alternatives for the places that fill up.',
    proofLabel: 'Local expert',
    pace: 'Balanced',
    nightlife: 'Medium',
    bestFor: ['Food-focused groups', 'Walkable city breaks', 'Groups of 4-8'],
    notFor: ['Mobility-limited groups without adaptations', 'Beach-first trips', 'Travelers avoiding hills'],
    included: ['Editable 4-day schedule', 'Neighborhood map', 'Reservation timeline', 'Rainy-day alternatives'],
    highlights: [
      { day: 1, title: 'Baixa and the river', items: ['Arrival route', 'First dinner', 'Low-key drinks'] },
      { day: 2, title: 'Alfama without backtracking', items: ['Morning route', 'Long lunch', 'Sunset stop'] },
      { day: 3, title: 'Markets and modern Lisbon', items: ['Market breakfast', 'Museum option', 'Group dinner'] },
      { day: 4, title: 'One last neighborhood', items: ['Coffee route', 'Souvenir stop', 'Airport timing'] }
    ],
    budget: [
      { label: 'Stay', amount: 260 },
      { label: 'Food and drinks', amount: 165 },
      { label: 'Activities', amount: 65 },
      { label: 'Local transport', amount: 50 }
    ]
  }
]

export function listingToTripPlan(listing: any): TripPlan {
  const fallback = demoTrips[0]
  const groupSize = Number(listing?.group_size) || fallback.groupMax
  const creatorHandle = listing?.creator?.handle || listing?.seller_handle || fallback.creatorHandle

  return {
    ...fallback,
    id: String(listing?.id || fallback.id),
    title: listing?.title || fallback.title,
    destination: listing?.destination || fallback.destination,
    category: String(listing?.category || fallback.category).replaceAll('_', ' '),
    durationDays: Number(listing?.duration_days) || fallback.durationDays,
    groupMin: Number(listing?.group_min) || Math.max(2, groupSize - 2),
    groupMax: Number(listing?.group_max) || groupSize,
    estimatedPerPerson: Number(listing?.estimated_per_person) || fallback.estimatedPerPerson,
    basePrice: Number(listing?.base_price) || fallback.basePrice,
    rating: Number(listing?.rating) || fallback.rating,
    completedTrips: Number(listing?.completed_trips || listing?.purchase_count) || 0,
    lastVerified: listing?.last_verified_at
      ? new Date(listing.last_verified_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      : fallback.lastVerified,
    creatorHandle,
    creatorName: listing?.creator?.display_name || fallback.creatorName,
    creatorLocation: listing?.creator?.location || fallback.creatorLocation,
    imageUrl: listing?.hero_image_url?.startsWith('http') ? listing.hero_image_url : fallback.imageUrl,
    summary: listing?.description || fallback.summary,
    proofLabel: listing?.proof_label || fallback.proofLabel,
    pace: listing?.pace || fallback.pace,
    nightlife: listing?.nightlife || fallback.nightlife,
    bestFor: listing?.best_for || fallback.bestFor,
    notFor: listing?.not_for || fallback.notFor,
    included: listing?.included || fallback.included,
    highlights: listing?.day_plan || fallback.highlights,
    budget: listing?.budget_breakdown || fallback.budget
  }
}

export function findDemoTrip(id: string) {
  return demoTrips.find((trip) => trip.id === id)
}

