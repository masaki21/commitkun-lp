import Image from "next/image";
import { Suspense } from "react";
import CtaButtons from "@/components/CtaButtons";
import PremiumTrialCta from "@/components/PremiumTrialCta";

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
  { label: "ホーム", src: "/screenshots/today.png" },
  { label: "体重記録", src: "/screenshots/weight.png" },
  { label: "食事一覧", src: "/screenshots/meal.png" },
  { label: "記録", src: "/screenshots/log.png" },
  { label: "カラダ", src: "/screenshots/body.png" },
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
  { q: "60代でも使える？", a: "読みやすいUIで安心。" },
  { q: "歩数は自動？", a: "許可すれば自動です（OFF可）。" },
  { q: "続かなかったら？", a: "リスタート前提の設計です。" },
  { q: "料金は？", a: "基本無料＋プレミアム機能（画像生成・コミュニティ）は有料です。" },
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
                食事は入力しません、写真でOK。責めずに、いつでもリスタート。
              </p>
            </div>
            <Suspense fallback={<div className="h-14" />}>
              <CtaButtons variant="top" />
            </Suspense>
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
              <Suspense fallback={<div className="h-14" />}>
                <CtaButtons variant="mid" />
              </Suspense>
            </div>
          </section>

          <section className="rounded-3xl bg-[var(--color-paper)] px-6 py-8 shadow-sm sm:px-10">
            <h2 className="mb-4 text-2xl font-bold">スクリーンショット</h2>
            <p className="mb-6 text-base text-[rgba(31,26,18,0.75)]">
              ホーム / 体重記録 / 食事一覧 / 記録 / カラダ を掲載。
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

          <section id="premium" className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold">
                プレミアムで、続けやすさが“もう一段”上がります
              </h2>
              <p className="text-base text-[rgba(31,26,18,0.75)]">
                初回1ヶ月は無料トライアル。責めないまま、続く仕組みだけ追加。
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="flex flex-col gap-5 rounded-3xl border border-[rgba(31,26,18,0.08)] bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold leading-snug">
                    AIカラダプレビュー（画像生成）
                  </h3>
                  <p className="text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                    「今」「目標」「太った場合」を並べて比較。数字よりイメージしやすい。
                  </p>
                </div>
                <ul className="flex flex-col gap-3 text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>全身写真を撮るだけで体型イメージを自動生成</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>どこを目指すか／どこで止めたいかが分かりやすい</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>Body画面で3つを並べて比較できる</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white">
                    <Image
                      src="/screens/premium_body_1.png"
                      alt="AIカラダプレビューの画面（比較）"
                      width={1200}
                      height={900}
                      className="h-64 w-full object-contain bg-white"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white">
                      <Image
                        src="/screens/premium_body_2.png"
                        alt="AIカラダプレビューの画面（目標）"
                        width={1200}
                        height={900}
                        className="h-40 w-full object-contain bg-white"
                        loading="lazy"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white">
                      <Image
                        src="/screens/premium_body_3.png"
                        alt="AIカラダプレビューの画面（変化）"
                        width={1200}
                        height={900}
                        className="h-40 w-full object-contain bg-white"
                        loading="lazy"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white">
                      <Image
                        src="/screens/premium_body_4.png"
                        alt="AIカラダプレビューの画面（比較2）"
                        width={1200}
                        height={900}
                        className="h-40 w-full object-contain bg-white"
                        loading="lazy"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
              </article>

              <article className="flex flex-col gap-5 rounded-3xl border border-[rgba(31,26,18,0.08)] bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold leading-snug">
                    今日のひとことボード（コミュニティ）
                  </h3>
                  <p className="text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                    ランキングも比較もなし。スタンプ中心で安心して続けられる。
                  </p>
                </div>
                <ul className="flex flex-col gap-3 text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>1日1回の「今日のひとこと」投稿</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>コメントなし／スタンプ中心で気疲れしない</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>「今日もおつかれさま」「また今日から」の文化</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white">
                    <Image
                      src="/screens/premium_community_1.png"
                      alt="今日のひとことボードの画面（投稿）"
                      width={1200}
                      height={900}
                      className="h-64 w-full object-contain bg-white"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white">
                    <Image
                      src="/screens/premium_community_2.png"
                      alt="今日のひとことボードの画面（スタンプ）"
                      width={1200}
                      height={900}
                      className="h-40 w-full object-contain bg-white"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </article>
            </div>

            <div
              id="premium-plan"
              className="grid gap-4 rounded-3xl border border-[rgba(31,26,18,0.08)] bg-[var(--color-paper)] p-6 shadow-sm sm:grid-cols-[1.2fr_1fr]"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold leading-snug">
                  プランは1種類、支払い頻度だけ選べます
                </h3>
                <p className="text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                  どちらを選んでも使える機能は同じです（年額がお得）。
                </p>
                <ul className="flex flex-col gap-3 text-base leading-relaxed text-[rgba(31,26,18,0.75)]">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>初回1ヶ月無料トライアル付き</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                    <span>トライアル終了後は自動課金（解約しない場合）</span>
                  </li>
                </ul>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-medium text-[rgba(31,26,18,0.6)]">
                    月額
                  </p>
                  <p className="text-2xl font-bold">500円（税込）</p>
                </div>
                <div className="relative rounded-2xl bg-white p-4 shadow-sm">
                  <span className="absolute right-4 top-4 rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-bold text-[rgba(31,26,18,0.8)]">
                    おすすめ
                  </span>
                  <p className="text-sm font-medium text-[rgba(31,26,18,0.6)]">
                    年額
                  </p>
                  <p className="text-2xl font-bold">5,000円（税込）</p>
                </div>
              </div>
            </div>

            <Suspense fallback={<div className="h-14" />}>
              <PremiumTrialCta />
            </Suspense>
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
              「責めない」「続きそう」を最初の10秒で体験できます。
            </p>
            <Suspense fallback={<div className="h-14" />}>
              <CtaButtons variant="bottom" />
            </Suspense>
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
