# デプロイ手順（Vercel）

## 前提
- 本番URLを `NEXT_PUBLIC_SITE_URL` に設定する
- GA4を使う場合は `NEXT_PUBLIC_GA4_ID` を設定する
- App Store URL を `NEXT_PUBLIC_APP_STORE_URL` に設定する

## ローカルでの確認
```bash
cd /Users/mac/commit-lp/web
npm install
npm run build
npm run start
```

## Vercelへのデプロイ
1. Vercelで新規プロジェクトを作成
2. リポジトリのルートを選択し、Root Directory を `web` に設定
3. Environment Variables に以下を追加
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_GA4_ID`（任意）
   - `NEXT_PUBLIC_APP_STORE_URL`
4. デプロイ実行

## 独自ドメイン
- VercelのDomain設定から追加
- 追加後に `NEXT_PUBLIC_SITE_URL` を更新
