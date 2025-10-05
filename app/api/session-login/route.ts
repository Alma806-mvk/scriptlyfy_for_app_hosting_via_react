import { NextRequest, NextResponse } from 'next/server'
import { adminAuth } from '@/lib/admin'

const COOKIE_NAME = process.env.SESSION_COOKIE_NAME || 'session'
const SESSION_MAX_AGE_DAYS = process.env.SESSION_COOKIE_DAYS
const SESSION_MAX_AGE_SECONDS = process.env.SESSION_COOKIE_MAX_AGE

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json()
    if (!idToken) return NextResponse.json({ error: 'Missing idToken' }, { status: 400 })

    let expiresIn = 7 * 24 * 60 * 60 * 1000
    if (SESSION_MAX_AGE_DAYS && !Number.isNaN(Number(SESSION_MAX_AGE_DAYS))) {
      expiresIn = Number(SESSION_MAX_AGE_DAYS) * 24 * 60 * 60 * 1000
    } else if (SESSION_MAX_AGE_SECONDS && !Number.isNaN(Number(SESSION_MAX_AGE_SECONDS))) {
      expiresIn = Number(SESSION_MAX_AGE_SECONDS) * 1000
    }
    const sessionCookie = await adminAuth().createSessionCookie(idToken, { expiresIn })
    const resp = NextResponse.json({ ok: true })
    resp.cookies.set({
      name: COOKIE_NAME,
      value: sessionCookie,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: Math.floor(expiresIn / 1000),
    })
    return resp
  } catch (e) {
    return NextResponse.json({ error: 'Failed to establish session' }, { status: 400 })
  }
}
