import React from 'react'

export default function Badge({ children, className = '' }: React.PropsWithChildren<any>){
  return (
    <span className={`inline-block px-2 py-1 rounded-full bg-ice-blue text-sm ${className}`}>{children}</span>
  )
}
