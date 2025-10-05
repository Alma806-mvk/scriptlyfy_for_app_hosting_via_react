import 'server-only'
import { cookies } from 'next/headers'
import { adminAuth } from './admin'

const COOKIE_NAME = process.env.SESSION_COOKIE_NAME || 'session'

export async function getSession() {
  const cookie = cookies().get(COOKIE_NAME)
  if (!cookie?.value) return null
  try {
    const decoded = await adminAuth().verifySessionCookie(cookie.value, true)
    return decoded
  } catch {
    return null
  }
}
