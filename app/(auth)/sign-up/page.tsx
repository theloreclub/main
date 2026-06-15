'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signUpWithEmail } from '../../../lib/auth'
import Button from '../../../components/ui/Button'
import LoreLogo from '../../../components/ui/LoreLogo'

export default function SignUpPage(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setLoading(true)
    setError(null)
    const res = await signUpWithEmail(email, password)
    setLoading(false)
    if(res.error){
      setError(res.error.message)
      return
    }
    router.push('/')
  }

  return (
    <section className="max-w-md mx-auto py-20">
      <div className="mb-8">
        <LoreLogo size={40} />
      </div>
      <h1 className="text-2xl font-display lowercase-voice">sign up</h1>
      <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" className="p-3 rounded border" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" type="password" className="p-3 rounded border" />
        {error && <div className="text-sm text-red-500">{error}</div>}
        <Button type="submit" className="w-full">{loading ? 'creating account…' : 'create account'}</Button>
      </form>
    </section>
  )
}
