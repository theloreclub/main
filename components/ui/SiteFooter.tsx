import Link from 'next/link'
import LoreLogo from './LoreLogo'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <LoreLogo size={30} />
          <p>Proven group trips, ready to make your own.</p>
        </div>
        <div className="footer-links">
          <Link href="/browse">Find a trip</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/sell">Sell a trip</Link>
          <Link href="/my-trips">My trips</Link>
        </div>
      </div>
    </footer>
  )
}

