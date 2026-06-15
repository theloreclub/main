'use client'
import { useRouter } from 'next/navigation'
import { signOut } from '../../lib/auth'
import Button from './Button'

export default function SignOutButton(){
  const router = useRouter()
  async function handleSignOut(){
    await signOut()
    router.push('/')
  }
  return <Button type="button" className="bg-white text-dark" onClick={handleSignOut}>sign out</Button>
}
