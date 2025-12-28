"use client";

import { useEffect } from "react";

type AnalyticsProps = {
  gaId: string;
};

function sendEvent(name: string) {
  if (typeof window === "undefined") return;
  if (!("gtag" in window)) return;

  window.gtag("event", name);
}

export default function Analytics({ gaId }: AnalyticsProps) {
  useEffect(() => {
    if (!gaId) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const button = target.closest("[data-cta]");
      if (!(button instanceof HTMLElement)) return;

      const variant = button.dataset.cta;
      if (!variant) return;

      const eventName =
        variant === "top"
          ? "click_appstore_top"
          : variant === "mid"
            ? "click_appstore_mid"
            : "click_appstore_bottom";

      sendEvent(eventName);
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

    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [gaId]);

  return null;
}
