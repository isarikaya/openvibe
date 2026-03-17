# OpenVibe

![Node.js 18+](https://img.shields.io/badge/Node.js-18%2B-brightgreen?style=flat-square)

OpenVibe is an open-source, full-stack SaaS starter kit built for vibe coders — whether you write code every day or just enough to ship your idea. Deployed entirely on Cloudflare's global edge network, so your app is fast from day one. Clone, customize, and ship.

## Features

| Feature | Description |
|---|---|
| Authentication | Users can create an account and log in with their Google account. No password headaches. |
| Subscriptions & Payments | Charge your users with subscription plans. Everything is set up, just connect your Polar account and go. |
| Database, ready to go | Your app's data is stored and managed automatically. No complex setup needed. |
| Beautiful UI Components | A library of ready-made buttons, forms, modals, and more. Just pick and use. |
| Fast by default | The backend runs on Cloudflare's global network, so your app is fast no matter where your users are. |
| One-click deploys | Push your code and Cloudflare handles the rest. No server management, no DevOps headaches. |

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | [Next.js](https://nextjs.org) on Cloudflare Workers |
| UI Components | [shadcn/ui](https://ui.shadcn.com) |
| Backend / API | [Hono](https://hono.dev) on Cloudflare Workers |
| Database | [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite) |
| ORM | [Prisma](https://www.prisma.io) with D1 adapter (beta) |
| Authentication | [Better Auth](https://www.better-auth.com) |
| Subscriptions | [Polar](https://polar.sh) |
| Deployment | [Cloudflare](https://cloudflare.com) (Workers + D1) |

## Roadmap

- [ ] Project setup (Next.js + Hono + Cloudflare)
- [ ] Better Auth integration
- [ ] Polar subscription integration
- [ ] Landing page template
- [ ] Pricing page template
- [ ] Dark / light mode
- [ ] CLI to scaffold a new project (`npx create-openvibe-app`)