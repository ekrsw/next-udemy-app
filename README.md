This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Setup
```
git clone https://github.com/ekrsw/next-udemy-app.git

// PrismaとPrisma Clientをインストール
npm install prisma@^6 @prisma/client@^6

//タイプスクリプトをNode.jsで直接実行できるランタイム
npm install --save-dev tsx

// tsxがあれば不要
// npm install -D ts-node@^10

npm install bcryptjs@^2

npm install @types/bcryptjs@^2
```

## マイグレーション
```
// マイグレーション（テーブル作成）
npx prisma migrate dev --name init

// シード実行（ダミーデータ）
npx prisma db seed

// DBの内容を確認
npx prisma studio

// DBリセット
npx prisma migrate reset
```
## マイグレーションでエラーが出たら
```
// 全てのマイグレーションファイルを削除
rm -rf prisma/migrations
// PowerShell
Remove-Item -Recurse -Force prisma/migrations


// dev.dbファイルも削除
rm prisma/dev.db
// PowerShell
Remove-Item .\prisma\dev.db

// 新しいマイグレーションファイルを作成
npx prisma migrate dev --name init

// シードを実行
npx prisma db seed
```