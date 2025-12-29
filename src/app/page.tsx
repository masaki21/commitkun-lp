"use client";

import Image from "next/image";
import { Suspense, useEffect, useMemo, useState } from "react";
import CtaButtons from "@/components/CtaButtons";
import PremiumTrialCta from "@/components/PremiumTrialCta";
import { COPY, type Lang } from "@/lib/copy";

const LANG_STORAGE_KEY = "lp_lang";

export default function Home() {
  const [lang, setLang] = useState<Lang>("ja");
  const t = useMemo(() => COPY[lang], [lang]);
  const screenshotAlt = (label: string) =>
    lang === "ja" ? `${label} の画面` : `${label} screen`;

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
    if (typeof window.gtag === "function") {
      window.gtag("event", "switch_lang", { lang: nextLang });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-[rgba(246,180,76,0.18)] blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-60 h-72 w-72 rounded-full bg-[rgba(224,106,59,0.18)] blur-3xl" />

        <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pb-24 pt-16 text-[17px] sm:px-10 sm:text-[18px]">
          <section className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="inline-flex w-fit items-center rounded-full bg-[var(--color-paper)] px-4 py-2 text-sm font-medium text-[var(--color-accent-deep)] shadow-sm">
                {t.hero.badge}
              </p>
              <button
                type="button"
                onClick={handleToggleLang}
                className="rounded-full bg-[var(--color-accent-deep)] px-5 py-2 text-sm font-bold text-white shadow-[0_8px_18px_rgba(224,106,59,0.25)] transition hover:-translate-y-0.5 hover:bg-[#cf5a2e]"
              >
                日本語 / English
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-serif text-3xl font-bold text-[rgba(31,26,18,0.75)] sm:text-4xl">
                {t.hero.title}
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
                {t.hero.h1}
              </h1>
              <p className="text-lg leading-relaxed text-[rgba(31,26,18,0.75)] sm:text-xl">
                {t.hero.sub[0]}
                <br />
                {t.hero.sub[1]}
              </p>
            </div>
            <Suspense fallback={<div className="h-14" />}>
              <CtaButtons
                variant="top"
                mainLabel={t.hero.ctaMain}
                subLabel={t.hero.ctaSub}
              />
            </Suspense>
          </section>

          <section className="rounded-3xl bg-[var(--color-paper)] px-6 py-8 shadow-sm sm:px-10">
            <h2 className="mb-6 text-2xl font-bold">{t.pain.title}</h2>
            <ul className="flex flex-col gap-4 text-lg leading-relaxed">
              {t.pain.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent-deep)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[rgba(31,26,18,0.08)] bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">{t.features.titleA}</h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                {t.features.itemsA.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[rgba(31,26,18,0.08)] bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">{t.features.titleB}</h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                {t.features.itemsB.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="how" className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">{t.how.title}</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {t.how.steps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <p className="text-sm font-semibold text-[var(--color-accent-deep)]">
                    STEP {index + 1}
                  </p>
                  <p className="mt-2 text-lg font-bold">{step}</p>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Suspense fallback={<div className="h-14" />}>
                <CtaButtons variant="mid" mainLabel={t.hero.ctaMain} />
              </Suspense>
            </div>
          </section>

          <section className="rounded-3xl bg-[var(--color-paper)] px-6 py-8 shadow-sm sm:px-10">
            <h2 className="mb-4 text-2xl font-bold">{t.screenshots.title}</h2>
            <p className="mb-6 text-base text-[rgba(31,26,18,0.75)]">
              {t.screenshots.lead}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {t.screenshots.items.map((shot) => (
                <figure
                  key={shot.label}
                  className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white shadow-sm"
                >
                  <Image
                    src={shot.src}
                    alt={screenshotAlt(shot.label)}
                    width={900}
                    height={1600}
                    className="h-80 w-full object-contain bg-white"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <figcaption className="px-4 py-3 text-center text-sm font-medium text-[rgba(31,26,18,0.7)]">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="premium" className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold">{t.premium.title}</h2>
              <p className="text-base text-[rgba(31,26,18,0.75)]">
                {t.premium.lead}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="flex flex-col gap-5 rounded-3xl border border-[rgba(31,26,18,0.08)] bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold leading-snug">
                    {t.premium.featA.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                    {t.premium.featA.lead}
                  </p>
                </div>
                <ul className="flex flex-col gap-3 text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                  {t.premium.featA.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white">
                    <Image
                      src={t.premium.featA.images.main}
                      alt="AIカラダプレビューの画面"
                      width={1200}
                      height={900}
                      className="h-64 w-full object-contain bg-white"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {t.premium.featA.images.sub.map((src, index) => (
                      <div
                        key={`${src}-${index}`}
                        className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white"
                      >
                        <Image
                          src={src}
                          alt="AIカラダプレビューの画面"
                          width={1200}
                          height={900}
                          className="h-40 w-full object-contain bg-white"
                          loading="lazy"
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="flex flex-col gap-5 rounded-3xl border border-[rgba(31,26,18,0.08)] bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold leading-snug">
                    {t.premium.featB.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                    {t.premium.featB.lead}
                  </p>
                </div>
                <ul className="flex flex-col gap-3 text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                  {t.premium.featB.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white">
                    <Image
                      src={t.premium.featB.images.main}
                      alt="今日のひとことボードの画面"
                      width={1200}
                      height={900}
                      className="h-64 w-full object-contain bg-white"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  {t.premium.featB.images.sub.length > 0 && (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {t.premium.featB.images.sub.map((src, index) => (
                        <div
                          key={`${src}-${index}`}
                          className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white"
                        >
                          <Image
                            src={src}
                            alt="今日のひとことボードの画面"
                            width={1200}
                            height={900}
                            className="h-40 w-full object-contain bg-white"
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </div>

            <div
              id="premium-plan"
              className="grid gap-4 rounded-3xl border border-[rgba(31,26,18,0.08)] bg-[var(--color-paper)] p-6 shadow-sm sm:grid-cols-[1.2fr_1fr]"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold leading-snug">
                  {t.premium.pricing.title}
                </h3>
                <p className="text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                  {t.premium.pricing.lead}
                </p>
                <ul className="flex flex-col gap-3 text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                  {t.premium.pricing.notes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-medium text-[rgba(31,26,18,0.6)]">
                    {t.premium.pricing.monthlyLabel}
                  </p>
                  <p className="text-2xl font-bold">
                    {t.premium.pricing.monthlyPrice}
                  </p>
                </div>
                <div className="relative rounded-2xl bg-white p-4 shadow-sm">
                  <span className="absolute right-4 top-4 rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-bold text-[rgba(31,26,18,0.8)]">
                    {t.premium.pricing.yearlyBadge}
                  </span>
                  <p className="text-sm font-medium text-[rgba(31,26,18,0.6)]">
                    {t.premium.pricing.yearlyLabel}
                  </p>
                  <p className="text-2xl font-bold">
                    {t.premium.pricing.yearlyPrice}
                  </p>
                </div>
              </div>
            </div>

            <Suspense fallback={<div className="h-14" />}>
              <PremiumTrialCta label={t.premium.cta.main} />
            </Suspense>
          </section>

          <section id="faq" className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{t.faq.title}</h2>
            <div className="flex flex-col gap-3">
              {t.faq.items.map((item) => (
                <details
                  key={item.q}
                  className="rounded-2xl border border-[rgba(31,26,18,0.08)] bg-white px-5 py-4"
                >
                  <summary className="cursor-pointer text-lg font-semibold">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-base text-[rgba(31,26,18,0.75)]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="flex flex-col items-center gap-4 rounded-3xl bg-white px-6 py-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold">{t.closing.title}</h2>
            <p className="text-base text-[rgba(31,26,18,0.75)]">
              {t.closing.lead}
            </p>
            <Suspense fallback={<div className="h-14" />}>
              <CtaButtons variant="bottom" mainLabel={t.hero.ctaMain} />
            </Suspense>
          </section>

          <footer className="flex flex-col gap-4 border-t border-[rgba(31,26,18,0.15)] pt-8 text-sm text-[rgba(31,26,18,0.75)]">
            <div className="flex flex-wrap gap-4">
              <a href="/privacy" className="font-medium text-[rgba(31,26,18,0.8)]">
                {t.footer.privacy}
              </a>
              <a href="/contact" className="font-medium text-[rgba(31,26,18,0.8)]">
                {t.footer.contact}
              </a>
              <span>{t.footer.disclaimer}</span>
            </div>
            <p>{t.footer.copyright}</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
