export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 pb-20 pt-16 text-[17px] sm:px-10">
      <h1 className="text-3xl font-bold">お問い合わせ</h1>
      <p>
        お問い合わせは以下のメールアドレスまでお願いします。内容を確認のうえ、順次ご返信します。
      </p>
      <div className="rounded-2xl border border-[rgba(31,26,18,0.12)] bg-white px-6 py-5 text-lg font-medium">
        masaki.omae420@gmail.com
      </div>
      <p className="text-sm text-[rgba(31,26,18,0.7)]">
        返信には数日かかる場合があります。ご了承ください。
      </p>
    </main>
  );
}
