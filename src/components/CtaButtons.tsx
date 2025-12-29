"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

type CtaButtonsProps = {
  variant: "top" | "mid" | "bottom";
  mainLabel?: string;
  subLabel?: string;
};

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

export default function CtaButtons({
  variant,
  mainLabel,
  subLabel,
}: CtaButtonsProps) {
  const searchParams = useSearchParams();
  const storeUrl = useMemo(() => buildStoreUrl(searchParams), [searchParams]);

  const resolvedMainLabel = mainLabel ?? "App Storeで見る";
  const resolvedSubLabel = subLabel ?? "使い方を見る";

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <a
        data-cta={variant}
        href={storeUrl}
        className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[var(--color-accent-deep)] px-6 text-lg font-bold text-white shadow-[0_10px_20px_rgba(224,106,59,0.25)] transition hover:-translate-y-0.5 hover:bg-[#cf5a2e] sm:w-auto"
      >
        {resolvedMainLabel}
      </a>
      {variant === "top" && (
        <a
          href="#how"
          className="inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-[var(--color-accent-deep)] px-6 text-lg font-bold text-[var(--color-accent-deep)] transition hover:bg-[rgba(224,106,59,0.08)] sm:w-auto"
        >
          {resolvedSubLabel}
        </a>
      )}
    </div>
  );
}
