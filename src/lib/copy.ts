export type Lang = "ja" | "en";

export const COPY = {
  ja: {
    hero: {
      badge: "60代からの、ゆるい見守り",
      h1: "毎日1分。体重を記録するだけ。",
      sub: [
        "「いつの間にか太ってガッカリ」を防ぐための、ゆるい見守りアプリ。",
        "食事は入力しません、写真でOK。責めずに、いつでもリスタート。",
      ],
      title: "コミットくん",
      ctaMain: "App Storeで見る",
      ctaSub: "使い方を見る",
    },
    pain: {
      title: "こんなお悩み、ありませんか？",
      items: [
        "ジムやきつい運動、厳しいダイエットは続かない",
        "食事入力が面倒で、記録アプリが続かない",
        "気づいたら体重が増えていて、ショック…そんな未来は避けたい",
      ],
    },
    features: {
      titleA: "安心できる仕組み",
      titleB: "続く理由",
      itemsA: [
        "体重は安心ゾーンで判定（安心/注意/危険）",
        "食事は写真だけ（カロリー計算なし）",
        "歩数は自動で見守り（HealthKit）",
        "月1で服のフィット感チェック",
      ],
      itemsB: [
        "責めない。いつでもリスタート。",
        "通知でやさしく見守り。",
        "減量モード時はモモ上げ運動。",
      ],
    },
    premium: {
      title: "コミュニティ＆チームは無料で使えます",
      lead:
        "同じように“ゆるく続けたい”仲間と、気持ちを共有できる居場所です。ランキングや競争はありません。",
      featA: {
        title: "コミュニティ＆チーム（無料）",
        lead: "気持ちを共有できる居場所として、無料で使えます。",
        items: [
          "今日のひとことボード：気分・今日できたことを投稿＆リアクション",
          "チーム機能（招待制・完全プライベート）：友達同士で励まし合えます",
          "チームチャット（テキスト）：チーム内で会話できます（1チームまで無料）",
        ],
        images: {
          main: "/screens/premium_community_1.png",
          sub: ["/screens/premium_community_2.png"],
        },
      },
      featB: {
        title: "AIカラダプレビュー（1回500円）",
        lead:
          "全身写真からAIが「理想の体型」「太った場合の体型」の2枚を生成します。",
        items: [
          "1回で2枚生成（理想／太った場合）",
          "「今・理想・太った場合」を見比べて方向性をイメージ",
          "必要なときだけ購入できます",
        ],
        images: {
          main: "/screens/premium_body_1.png",
          sub: [
            "/screens/premium_body_2.png",
            "/screens/premium_body_3.png",
            "/screens/premium_body_4.png",
          ],
        },
      },
      pricing: {
        title: "追加できる機能（アプリ内課金／都度課金）",
        lead: "必要なときだけ購入できる仕組みです。",
        notes: [
          "追加機能は App Store のアプリ内課金で購入できます",
          "AIプレビュー：1回500円（1回で2枚生成）",
          "チーム枠 +5：500円",
          "価格は国や地域により異なる場合があります",
          "返金・キャンセルの可否は App Store の規定に従います",
        ],
        monthlyLabel: "AIカラダプレビュー（1回）",
        monthlyPrice: "500円",
        yearlyLabel: "チーム枠 +5",
        yearlyPrice: "500円",
        yearlyBadge: "追加",
      },
      cta: {
        main: "App Storeで見る",
      },
    },
    how: {
      title: "使い方は3ステップ",
      steps: ["体重を記録", "食事は写真でOK", "歩数は自動で反映"],
    },
    screenshots: {
      title: "スクリーンショット",
      lead: "ホーム / 体重記録 / 食事一覧 / 記録 / カラダ などを掲載。",
      items: [
        { label: "ホーム", src: "/screenshots/today.png" },
        { label: "体重記録", src: "/screenshots/weight.png" },
        { label: "食事一覧", src: "/screenshots/meal.png" },
        { label: "記録", src: "/screenshots/log.png" },
        { label: "カラダ", src: "/screenshots/body.png" },
      ],
    },
    closing: {
      title: "いまからでも、ゆるく始められます。",
      lead: "「責めない」「続きそう」を最初の10秒で体験できます。",
    },
    footer: {
      privacy: "プライバシーポリシー",
      contact: "お問い合わせ",
      disclaimer: "医療行為ではありません。",
      copyright: "© Commit-kun",
    },
    privacy: {
      title: "プライバシーポリシー",
      lead:
        "コミットくん（以下、「本サービス」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。本ページは公開用のドラフトです。",
      sections: [
        {
          title: "取得する情報",
          body:
            "アプリ利用に必要な範囲で、体重・写真・歩数などの記録情報を扱います。",
        },
        {
          title: "利用目的",
          body: "本サービスの提供、改善、サポートのために利用します。",
        },
        {
          title: "第三者提供",
          body:
            "法令に基づく場合を除き、本人の同意なく第三者に提供しません。",
        },
        {
          title: "お問い合わせ",
          body: "本ポリシーに関するお問い合わせはお問い合わせページからお願いします。",
        },
      ],
    },
    contact: {
      title: "お問い合わせ",
      lead:
        "お問い合わせは以下のメールアドレスまでお願いします。内容を確認のうえ、順次ご返信します。",
      email: "masaki.omae420@gmail.com",
      note: "返信には数日かかる場合があります。ご了承ください。",
    },
    faq: {
      title: "よくある質問",
      items: [
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
        {
          q: "料金は？",
          a: "基本機能・コミュニティ・1チームまでのチーム機能は無料です。追加したい場合のみ、AIカラダプレビュー（1回500円）やチーム枠+5（500円）を都度購入できます。",
        },
        { q: "医療アプリ？", a: "診断/治療目的ではありません。" },
      ],
    },
  },
  en: {
    hero: {
      badge: "Gentle support for your 60s",
      h1: "Just 1 minute a day. Log your weight.",
      sub: [
        "A gentle companion app to prevent the “oh no, I gained weight” moment.",
        "No food input needed—photos are enough. No blame, restart anytime.",
      ],
      title: "Commit-kun",
      ctaMain: "View on the App Store",
      ctaSub: "See how it works",
    },
    pain: {
      title: "Does this sound familiar?",
      items: [
        "Gyms, intense workouts, and strict diets don’t stick",
        "Food logging is too much, so tracking apps fade out",
        "Weight creeps up and it’s a shock—we want to prevent that future",
      ],
    },
    features: {
      titleA: "A calm, reassuring system",
      titleB: "Why it keeps going",
      itemsA: [
        "Weight judged in a safe zone (OK / watch / alert)",
        "Meals by photo only (no calorie math)",
        "Steps watched automatically (HealthKit)",
        "Monthly outfit fit check",
      ],
      itemsB: [
        "No blame. Restart anytime.",
        "Gentle reminders to keep you on track.",
        "Knee‑lift exercise in weight‑loss mode.",
      ],
    },
    premium: {
      title: "Community & Teams are free to use",
      lead:
        "A place to share feelings with others who want to keep it gentle. No rankings or competition.",
      featA: {
        title: "Community & Teams (free)",
        lead: "A supportive space you can use for free.",
        items: [
          "Today’s One‑Word Board: post your mood and small wins",
          "Team feature (invite‑only, private): encourage each other with friends",
          "Team chat (text): talk inside your team (1 team free)",
        ],
        images: {
          main: "/screens/premium_community_1.png",
          sub: ["/screens/premium_community_2.png"],
        },
      },
      featB: {
        title: "AI Body Preview (¥500 per use)",
        lead:
          "AI generates two images from a full‑body photo: ideal shape and if you gain.",
        items: [
          "Two images per purchase (ideal / if you gain)",
          "Compare “now, ideal, if you gain” to picture direction",
          "Buy only when you need it",
        ],
        images: {
          main: "/screens/premium_body_1.png",
          sub: [
            "/screens/premium_body_2.png",
            "/screens/premium_body_3.png",
            "/screens/premium_body_4.png",
          ],
        },
      },
      pricing: {
        title: "Optional add‑ons (in‑app, pay‑as‑you‑go)",
        lead: "Purchase only when you need them.",
        notes: [
          "Add‑ons are purchased via App Store in‑app purchase",
          "AI Preview: ¥500 per use (2 images per purchase)",
          "Team slots +5: ¥500",
          "Prices may vary by country/region",
          "Refunds and cancellations follow App Store policy",
        ],
        monthlyLabel: "AI Body Preview (one‑time)",
        monthlyPrice: "¥500",
        yearlyLabel: "Team slots +5",
        yearlyPrice: "¥500",
        yearlyBadge: "Add‑on",
      },
      cta: {
        main: "View on the App Store",
      },
    },
    how: {
      title: "3 simple steps",
      steps: ["Log your weight", "Meals by photo only", "Steps auto‑sync"],
    },
    screenshots: {
      title: "Screenshots",
      lead: "Home / Weight / Meals / Log / Body and more.",
      items: [
        { label: "Home", src: "/screenshots/today.png" },
        { label: "Weight", src: "/screenshots/weight.png" },
        { label: "Meals", src: "/screenshots/meal.png" },
        { label: "Log", src: "/screenshots/log.png" },
        { label: "Body", src: "/screenshots/body.png" },
      ],
    },
    closing: {
      title: "You can start gently, anytime.",
      lead: "Feel the “no‑blame, easy‑to‑continue” approach in 10 seconds.",
    },
    footer: {
      privacy: "Privacy Policy",
      contact: "Contact",
      disclaimer: "Not a medical service.",
      copyright: "© Commit-kun",
    },
    privacy: {
      title: "Privacy Policy",
      lead:
        "Commit-kun (the “Service”) respects your privacy and works to protect personal information. This page is a public draft.",
      sections: [
        {
          title: "Information We Handle",
          body:
            "We handle records such as weight, photos, and steps only as needed to provide the service.",
        },
        {
          title: "Purpose of Use",
          body: "Used to provide, improve, and support the service.",
        },
        {
          title: "Third-Party Disclosure",
          body:
            "We do not disclose to third parties without consent, except as required by law.",
        },
        {
          title: "Contact",
          body: "For questions about this policy, please use the Contact page.",
        },
      ],
    },
    contact: {
      title: "Contact",
      lead:
        "Please reach out to the email below. We will respond after reviewing your message.",
      email: "masaki.omae420@gmail.com",
      note: "Replies may take a few days. Thank you for your patience.",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Do I need to restrict food?",
          a: "No. Just record gently with photos.",
        },
        { q: "I’m not good at exercise. Is it OK?", a: "Yes—no pressure." },
        {
          q: "What do I track?",
          a: "Weight, photos, steps, and fit feel.",
        },
        { q: "Can I use it in my 60s?", a: "Yes—large, readable UI." },
        { q: "Are steps automatic?", a: "Yes if you allow it (can turn off)." },
        { q: "What if I stop?", a: "You can restart anytime." },
        {
          q: "Is there a fee?",
          a: "Core features, community, and one team are free. If you want more, you can buy AI Body Preview (¥500 per use) or Team slots +5 (¥500) as needed.",
        },
        { q: "Is this a medical app?", a: "No medical diagnosis or treatment." },
      ],
    },
  },
} as const;
