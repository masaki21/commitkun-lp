import Image from "next/image";
import CtaButtons from "@/components/CtaButtons";

const worries = [
  "ジムやきつい運動、厳しいダイエットは続かない",
  "食事入力が面倒で、記録アプリが続かない",
  "気づいたら体重が増えていて、ショック…そんな未来は避けたい",
];

const solutions = [
  "体重は安心ゾーンで判定（安心/注意/危険）",
  "食事は写真だけ（カロリー計算なし）",
  "歩数は自動で見守り（HealthKit）",
  "月1で服のフィット感チェック",
];

const steps = ["体重を記録", "食事は写真でOK", "歩数は自動で反映"];

const support = [
  "責めない。いつでもリスタート。",
  "通知でやさしく見守り。",
  "減量モード時はモモ上げ運動。",
];

const screenshots = [
  { label: "Today", src: "/screenshots/today.png" },
  { label: "体重", src: "/screenshots/weight.png" },
  { label: "食事", src: "/screenshots/meal.png" },
  { label: "Log", src: "/screenshots/log.png" },
  { label: "Body", src: "/screenshots/body.png" },
];

const faqs = [
  {
    q: "食事制限は必要？",
    a: "写真でゆるく記録するだけ。制限はありません。",
  },
  { q: "運動が苦手でも大丈夫？", a: "がんばりすぎない前提です。" },
  {
    q: "何を記録？",
    a: "体重・写真・歩数・フィット感を記録します。",
  },
  { q: "60代でも使える？", a: "読みやすいUIを想定しています。" },
  { q: "歩数は自動？", a: "許可すれば自動です（OFF可）。" },
  { q: "続かなかったら？", a: "リスタート前提の設計です。" },
  { q: "料金は？", a: "基本無料＋プレミアム予定です。" },
  {
    q: "医療アプリ？",
    a: "診断/治療目的ではありません。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-[rgba(246,180,76,0.18)] blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-60 h-72 w-72 rounded-full bg-[rgba(224,106,59,0.18)] blur-3xl" />

        <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pb-24 pt-16 text-[17px] sm:px-10 sm:text-[18px]">
          <section className="flex flex-col gap-8">
            <p className="inline-flex w-fit items-center rounded-full bg-[var(--color-paper)] px-4 py-2 text-sm font-medium text-[var(--color-accent-deep)] shadow-sm">
              60代からの、ゆるい見守り
            </p>
            <div className="flex flex-col gap-5">
              <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
                毎日1分。体重を記録するだけ。
              </h1>
              <p className="text-lg leading-relaxed text-[rgba(31,26,18,0.75)] sm:text-xl">
                「いつの間にか太ってガッカリ」を防ぐための、ゆるい見守りアプリ。
                食事は入力しません。写真でOK。責めずに、いつでもリスタート。
              </p>
            </div>
            <CtaButtons variant="top" />
          </section>

          <section className="rounded-3xl bg-[var(--color-paper)] px-6 py-8 shadow-sm sm:px-10">
            <h2 className="mb-6 text-2xl font-bold">こんなお悩み、ありませんか？</h2>
            <ul className="flex flex-col gap-4 text-lg leading-relaxed">
              {worries.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent-deep)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[rgba(31,26,18,0.08)] bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">安心できる仕組み</h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                {solutions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[rgba(31,26,18,0.08)] bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">続く理由</h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                {support.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="how" className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">使い方は3ステップ</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((step, index) => (
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
              <CtaButtons variant="mid" />
            </div>
          </section>

          <section className="rounded-3xl bg-[var(--color-paper)] px-6 py-8 shadow-sm sm:px-10">
            <h2 className="mb-4 text-2xl font-bold">スクリーンショット</h2>
            <p className="mb-6 text-base text-[rgba(31,26,18,0.75)]">
              Today / 体重 / 食事 / Log / Body などを掲載予定。
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {screenshots.map((shot) => (
                <figure
                  key={shot.label}
                  className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white shadow-sm"
                >
                  <Image
                    src={shot.src}
                    alt={`${shot.label} の画面`}
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

          <section id="faq" className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">よくある質問</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((item) => (
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
            <h2 className="text-2xl font-bold">
              いまからでも、ゆるく始められます。
            </h2>
            <p className="text-base text-[rgba(31,26,18,0.75)]">
              「責めない」「続きそう」を最初の10秒で伝えます。
            </p>
            <CtaButtons variant="bottom" />
          </section>

          <footer className="flex flex-col gap-4 border-t border-[rgba(31,26,18,0.15)] pt-8 text-sm text-[rgba(31,26,18,0.75)]">
            <div className="flex flex-wrap gap-4">
              <a href="/privacy" className="font-medium text-[rgba(31,26,18,0.8)]">
                プライバシーポリシー
              </a>
              <a href="/contact" className="font-medium text-[rgba(31,26,18,0.8)]">
                お問い合わせ
              </a>
              <span>医療行為ではありません。</span>
            </div>
            <p>© Commit-kun</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
