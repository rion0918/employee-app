# 社員情報管理アプリケーション（Next.js + NestJS + GraphQL + Prisma）

## ✅ 概要
このアプリケーションは、社員情報を管理するためのWebアプリです。  
以下の技術スタックを使用して構築されています：

- フロントエンド：Next.js
- バックエンド：NestJS（GraphQL）
- ORM：Prisma（SQLite）
- デプロイ先：Vercel（フロント）、Render（バックエンド）

## ✅ 主な機能
- 社員一覧の表示（検索機能付き）
- 新規社員の登録
- 社員情報の編集
- 社員の削除

## ✅ 使用技術

| 項目 | 使用技術 |
|------|------------|
| フロント | Next.js / TypeScript / Apollo Client |
| バックエンド | NestJS / GraphQL（コードファースト） |
| データベース | Prisma（SQLite） |
| デプロイ | Vercel（フロント） / Render（バックエンド） |

## ✅ アクセス方法
どなたでも以下のURLからアプリケーションを操作できます。

- 🌐 フロントエンド（UI）：  
  [https://employee-app-six-chi.vercel.app](https://employee-app-six-chi.vercel.app)

- 🔧 GraphQLエンドポイント（開発者向け）：  
  [https://employee-app-service.onrender.com/graphql](https://employee-app-service.onrender.com/graphql)

> フロントページから社員の登録・検索・編集・削除が可能です。

## ✅ 起動コマンド（開発用）

### Prisma 関連
```bash
npx prisma generate
npx prisma studio

### NestJS 開発起動
pnpm start:dev

### Next.js 起動
pnpm dev