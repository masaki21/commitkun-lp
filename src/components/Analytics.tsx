"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type AnalyticsProps = {
  gaId: string;
};

function sendEvent(name: string) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", name);
}

export default function Analytics({ gaId }: AnalyticsProps) {
  useEffect(() => {
    if (!gaId) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const button = target.closest("[data-cta]");
      if (button instanceof HTMLElement) {
        const variant = button.dataset.cta;
        if (variant) {
          const eventName =
            variant === "top"
              ? "click_appstore_top"
              : variant === "mid"
                ? "click_appstore_mid"
                : "click_appstore_bottom";

          sendEvent(eventName);
          return;
        }
      }

      const premiumButton = target.closest("[data-premium-cta]");
      if (!(premiumButton instanceof HTMLElement)) return;
      sendEvent("click_premium_trial");
    };

    let sentScroll = false;
    const handleScroll = () => {
      if (sentScroll) return;
      const scrollTop = window.scrollY;
      const viewport = window.innerHeight;
      const height = document.documentElement.scrollHeight;
      if (height === 0) return;
      const ratio = (scrollTop + viewport) / height;
      if (ratio >= 0.5) {
        sentScroll = true;
        sendEvent("scroll_50");
      }
    };

    let premiumObserver: IntersectionObserver | null = null;
    const premiumSection = document.getElementById("premium");
    if (premiumSection) {
      premiumObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry || !entry.isIntersecting) return;
          sendEvent("view_premium_section");
          premiumObserver?.disconnect();
          premiumObserver = null;
        },
        { threshold: 0.35 }
      );
      premiumObserver.observe(premiumSection);
    }

    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      premiumObserver?.disconnect();
    };
  }, [gaId]);

  return null;
}
