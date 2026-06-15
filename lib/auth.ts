'use client'
import { supabase } from './supabase'

export async function signInWithEmail(email: string, password: string){
  const res = await supabase.auth.signInWithPassword({ email, password })
  return res
}

export async function signUpWithEmail(email: string, password: string){
  const res = await supabase.auth.signUp({ email, password })
  return res
}

export function signOut(){
  return supabase.auth.signOut()
}

export default { signInWithEmail, signUpWithEmail, signOut }
