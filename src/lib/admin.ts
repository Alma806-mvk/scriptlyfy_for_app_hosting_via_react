import { App, initializeApp, applicationDefault, cert, getApps } from 'firebase-admin/app'
import { getAuth as getAdminAuth } from 'firebase-admin/auth'

let adminApp: App | null = null

export function getAdminApp(): App {
  if (adminApp) return adminApp

  // Prefer explicit service account from env; fall back to applicationDefault when available (GCP).
  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (projectId && clientEmail && privateKey) {
    adminApp = getApps()[0] || initializeApp({
      credential: cert({ projectId, clientEmail, privateKey }),
    })
  } else {
    // In Firebase App Hosting, applicationDefault will work if ADC is configured
    adminApp = getApps()[0] || initializeApp({ credential: applicationDefault() })
  }
  return adminApp
}

export function adminAuth() {
  return getAdminAuth(getAdminApp())
}
