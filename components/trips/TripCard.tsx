import Image from 'next/image'
import Link from 'next/link'
import type { TripPlan } from '../../lib/tripPresentation'

export default function TripCard({ trip, matchReason }: { trip: TripPlan; matchReason?: string }) {
  return (
    <article className="trip-card">
      <Link href={`/listing/${trip.id}`} className="block">
        <div className="trip-card-image">
          <Image src={trip.imageUrl} alt={trip.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          <div className="trip-card-badges">
            <span className="proof-badge">{trip.proofLabel}</span>
            <span className="category-badge">{trip.category}</span>
          </div>
          <button type="button" aria-label="Save plan" className="save-orb">
            +
          </button>
        </div>
      </Link>

      <div className="trip-card-body">
        {matchReason && <p className="match-reason">{matchReason}</p>}
        <Link href={`/listing/${trip.id}`}>
          <h3>{trip.title}</h3>
        </Link>
        <p className="trip-card-summary">{trip.summary}</p>

        <div className="trip-facts">
          <span>{trip.durationDays} days</span>
          <span>{trip.groupMin}-{trip.groupMax} people</span>
          <span>about ${trip.estimatedPerPerson}/person</span>
        </div>

        <div className="trip-card-footer">
          <div>
            <strong>{trip.rating.toFixed(1)}</strong>
            <span> rating</span>
            <span className="dot-separator">·</span>
            <span>{trip.completedTrips || 'New'} completed</span>
          </div>
          <strong className="trip-price">${trip.basePrice}</strong>
        </div>
      </div>
    </article>
  )
}

