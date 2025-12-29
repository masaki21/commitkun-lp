"use client";

import { useEffect, useMemo, useState } from "react";
import { COPY, type Lang } from "@/lib/copy";

const LANG_STORAGE_KEY = "lp_lang";

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>("ja");
  const t = useMemo(() => COPY[lang], [lang]);

  useEffect(() => {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === "ja" || stored === "en") {
      setLang(stored);
      return;
    }
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("en")) {
      setLang("en");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  }, [lang]);

  const handleToggleLang = () => {
    const nextLang = lang === "ja" ? "en" : "ja";
    setLang(nextLang);
    window.localStorage.setItem(LANG_STORAGE_KEY, nextLang);
  };

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 pb-20 pt-16 text-[17px] sm:px-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold">{t.contact.title}</h1>
        <button
          type="button"
          onClick={handleToggleLang}
          className="rounded-full bg-[var(--color-accent-deep)] px-4 py-2 text-sm font-bold text-white shadow-[0_8px_18px_rgba(224,106,59,0.25)] transition hover:-translate-y-0.5 hover:bg-[#cf5a2e]"
        >
          日本語 / English
        </button>
      </div>
      <p>{t.contact.lead}</p>
      <div className="rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white px-6 py-5 text-lg font-medium">
        {t.contact.email}
      </div>
      <p className="text-sm text-[rgba(31,26,18,0.7)]">{t.contact.note}</p>
    </main>
  );
}
