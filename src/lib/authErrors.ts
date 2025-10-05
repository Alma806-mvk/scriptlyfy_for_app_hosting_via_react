export function humanizeAuthError(err: unknown): string {
  const code = (err as any)?.code as string | undefined
  switch (code) {
    case 'auth/operation-not-allowed':
      return 'Email & password sign-up is not enabled. Please enable it in your Firebase project.'
    case 'auth/email-already-in-use':
      return 'That email is already in use. Try signing in instead.'
    case 'auth/invalid-email':
      return 'Please enter a valid email address.'
    case 'auth/weak-password':
      return 'Password is too weak. Try at least 6 characters.'
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later.'
    case 'auth/network-request-failed':
      return 'Network error. Check your connection and try again.'
    default:
      return (err as any)?.message || 'Something went wrong. Please try again.'
  }
}
