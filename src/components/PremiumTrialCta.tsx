"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

const STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  "https://apps.apple.com/app/id000000000";

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
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <a
        href={storeUrl}
        data-premium-cta="trial"
        className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[var(--color-accent-deep)] px-6 text-lg font-bold text-white shadow-[0_10px_20px_rgba(224,106,59,0.25)] transition hover:-translate-y-0.5 hover:bg-[#cf5a2e] sm:w-auto"
      >
        1ヶ月無料で試す
      </a>
      <a
        href="#premium-plan"
        className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-[var(--color-accent-deep)] px-5 text-base font-bold text-[var(--color-accent-deep)] transition hover:bg-[rgba(224,106,59,0.08)] sm:w-auto"
      >
        プラン詳細を見る
      </a>
    </div>
  );
}
