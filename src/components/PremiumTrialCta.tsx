"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

const STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  "https://apps.apple.com/jp/app/%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E3%81%8F%E3%82%93/id6755699418";

function buildStoreUrl(params: URLSearchParams) {
  const url = new URL(STORE_URL);
  const keys = ["utm_source", "utm_medium", "utm_campaign"];

  keys.forEach((key) => {
    const value = params.get(key);
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

export default function PremiumTrialCta() {
  const searchParams = useSearchParams();
  const storeUrl = useMemo(() => buildStoreUrl(searchParams), [searchParams]);

  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={storeUrl}
        data-premium-cta="trial"
        className="relative z-10 inline-flex h-14 w-full items-center justify-center rounded-full bg-[var(--color-accent-deep)] px-6 text-lg font-bold text-white shadow-[0_10px_20px_rgba(224,106,59,0.25)] transition hover:-translate-y-0.5 hover:bg-[#cf5a2e] sm:w-auto"
      >
        1ヶ月無料で試す
      </a>
    </div>
  );
}
