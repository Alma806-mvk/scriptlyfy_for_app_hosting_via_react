"use client";
import { getClientApp } from "@/lib/firebase";
import { getAuth, setPersistence, browserLocalPersistence, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile, onAuthStateChanged, type User, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

let initialized = false;
let authInstance: ReturnType<typeof getAuth> | null = null;

export function getClientAuth() {
  const app = getClientApp();
  if (!app) return null;
  if (!authInstance) {
    authInstance = getAuth(app);
  }
  if (!initialized && authInstance) {
    setPersistence(authInstance, browserLocalPersistence).catch(() => {});
    initialized = true;
  }
  return authInstance;
}

export async function signUpWithEmail(email: string, password: string, displayName?: string) {
  const auth = getClientAuth();
  if (!auth) throw new Error("Firebase not configured");
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) {
    try { await updateProfile(cred.user, { displayName }); } catch {}
  }
  // Establish server session cookie
  try {
    const idToken = await cred.user.getIdToken();
    await fetch("/api/session-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
      credentials: "include",
    });
  } catch {}
  return cred.user;
}

export async function signInWithEmail(email: string, password: string) {
  const auth = getClientAuth();
  if (!auth) throw new Error("Firebase not configured");
  const cred = await signInWithEmailAndPassword(auth, email, password);
  // Establish server session cookie
  try {
    const idToken = await cred.user.getIdToken();
    await fetch("/api/session-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
      credentials: "include",
    });
  } catch {}
  return cred.user;
}

export async function logout() {
  const auth = getClientAuth();
  if (!auth) return;
  // Clear server session cookie
  try {
    await fetch("/api/session-logout", { method: "POST", credentials: "include" });
  } catch {}
  await signOut(auth);
}

export async function resetPassword(email: string) {
  const auth = getClientAuth();
  if (!auth) throw new Error("Firebase not configured");
  await sendPasswordResetEmail(auth, email);
}

export function onAuth(cb: (user: User | null) => void) {
  const auth = getClientAuth();
  if (!auth) return () => {};
  return onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
  const auth = getClientAuth();
  if (!auth) throw new Error("Firebase not configured");
  const provider = new GoogleAuthProvider();
  const cred = await signInWithPopup(auth, provider);
  try {
    const idToken = await cred.user.getIdToken();
    await fetch("/api/session-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
      credentials: "include",
    });
  } catch {}
  return cred.user;
}
