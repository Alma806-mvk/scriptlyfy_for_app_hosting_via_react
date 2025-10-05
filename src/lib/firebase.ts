import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'

// Prefer NEXT_PUBLIC_* envs; fall back to FIREBASE_WEB_APP_CONFIG (App Hosting)
function resolveConfig() {
  const envConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  } as const
  if (envConfig.projectId) return envConfig
  if (typeof window !== 'undefined') {
    const anyWin = window as any
    const injected = anyWin.FIREBASE_WEB_APP_CONFIG as
      | { apiKey?: string; authDomain?: string; projectId?: string; appId?: string; measurementId?: string }
      | undefined
    if (injected?.projectId) {
      return injected
    }
  }
  return envConfig
}

export function getClientApp(): FirebaseApp | null {
  const cfg = resolveConfig()
  if (!cfg.projectId) return null
  return getApps()[0] || initializeApp(cfg)
}
