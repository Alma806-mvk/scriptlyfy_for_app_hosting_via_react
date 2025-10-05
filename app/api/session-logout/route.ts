import { NextResponse } from 'next/server'

const COOKIE_NAME = process.env.SESSION_COOKIE_NAME || 'session'

export async function POST() {
  const resp = NextResponse.json({ ok: true })
  resp.cookies.set({ name: COOKIE_NAME, value: '', path: '/', httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: 0 })
  return resp
}
