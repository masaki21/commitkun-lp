export default function PrivacyPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 pb-20 pt-16 text-[17px] sm:px-10">
      <h1 className="text-3xl font-bold">プライバシーポリシー</h1>
      <p>
        コミットくん（以下、「本サービス」）は、ユーザーのプライバシーを尊重し、
        個人情報の保護に努めます。本ページは公開用のドラフトです。
      </p>
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">取得する情報</h2>
        <p>アプリ利用に必要な範囲で、体重・写真・歩数などの記録情報を扱います。</p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">利用目的</h2>
        <p>本サービスの提供、改善、サポートのために利用します。</p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">第三者提供</h2>
        <p>法令に基づく場合を除き、本人の同意なく第三者に提供しません。</p>
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">お問い合わせ</h2>
        <p>本ポリシーに関するお問い合わせはお問い合わせページからお願いします。</p>
      </section>
    </main>
  );
}
