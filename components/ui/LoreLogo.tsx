import React from 'react'

interface LoreLogoProps {
  variant?: 'default' | 'white'
  size?: number
  showWordmark?: boolean
  className?: string
}

export default function LoreLogo({ variant = 'default', size = 36, showWordmark = true, className = '' }: LoreLogoProps) {
  const wordmarkColor = variant === 'white' ? '#FFFFFF' : '#1A3FCF'
  const bubbleColor = variant === 'white' ? '#FFFFFF' : '#1A3FCF'
  const frontCircleFill = variant === 'white' ? 'rgba(255,255,255,0.25)' : '#C8D5F4'
  const frontCircleStroke = variant === 'white' ? 'rgba(255,255,255,0.6)' : '#FFFFFF'
  const starColor = variant === 'white' ? '#FFFFFF' : '#1A1A3E'
  const starAccent = variant === 'white' ? 'rgba(255,255,255,0.5)' : '#4A5BB5'

  return (
    <div className={`flex items-center gap-2 ${className}`} style={{ lineHeight: 1 }}>
      {/* Icon mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Back chat bubble circle */}
        <circle cx="20" cy="19" r="17" fill={bubbleColor} />
        {/* Chat bubble tail (bottom-left) */}
        <path d="M10 32 L3 46 L19 37" fill={bubbleColor} />
        {/* Front circle (ice blue / periwinkle) */}
        <circle cx="30" cy="28" r="15" fill={frontCircleFill} stroke={frontCircleStroke} strokeWidth="2" />
        {/* 4-pointed sparkle star — vertical arms longer than horizontal */}
        <path
          d="M30 17 L31.6 26.4 L41 28 L31.6 29.6 L30 39 L28.4 29.6 L19 28 L28.4 26.4 Z"
          fill={starColor}
        />
        {/* Subtle inner highlight on star */}
        <path
          d="M30 22 L30.8 27.2 L36 28 L30.8 28.8 L30 34 L29.2 28.8 L24 28 L29.2 27.2 Z"
          fill={starAccent}
          opacity={0.35}
        />
        {/* Thin horizontal highlight line across star center */}
        <line x1="22" y1="28" x2="38" y2="28" stroke={variant === 'white' ? 'rgba(255,255,255,0.4)' : '#6B8FD8'} strokeWidth="0.8" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <span
          style={{ color: wordmarkColor, fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700, fontSize: size * 0.72, letterSpacing: '-0.02em', textTransform: 'lowercase' }}
        >
          lore
        </span>
      )}
    </div>
  )
}
