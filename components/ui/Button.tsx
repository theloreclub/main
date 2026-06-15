import React from 'react'

export default function Button({ children, className = '', ...props }: React.PropsWithChildren<any>){
  return (
    <button className={`px-4 py-2 rounded bg-lapis-blue text-white ${className}`} {...props}>{children}</button>
  )
}
