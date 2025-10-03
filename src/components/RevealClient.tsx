"use client";
import { useEffect } from "react";

export default function RevealClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-observe="reveal"]'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.setAttribute('data-in', 'true'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).setAttribute('data-in', 'true');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return <>{children}</>;
}
