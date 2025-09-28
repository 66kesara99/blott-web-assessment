
# Blott News — Latest Financial News & Market Updates

Blott News is a modern web application that delivers the latest financial news and market trends, powered by the finhub.io API. Built with Next.js 15, React 19, and Tailwind CSS, it provides a fast, responsive, and visually appealing experience for users seeking up-to-date information from the world of finance.

## Demo

This project is deployed in [https://blott-news-neon.vercel.app/](https://blott-news-neon.vercel.app/)

## Features

- Fetches and displays real-time financial news from finhub.io
- Using Next.js cache with Incremental Static Regeneration (ISR) to reduce API load
- Responsive design for desktop and mobile
- Skeleton loading states for smooth UX
- SEO-optimized with Next.js metadata
- Modular, type-safe codebase using TypeScript and Zod
- Unit testing with Vitest

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm, npm, or yarn
- A finhub.io API key (set as `NEXT_PUBLIC_FINHUB_API_KEY` in `.env.local`)

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/66kesara99/blott-web-assessment.git
	cd blott-web-assessment
	```
2. Install dependencies:
	```bash
	pnpm install
	# or
	npm install
	# or
	yarn install
	```
3. Create a `.env.local` file and add your Finhub API key:
	```env
	NEXT_PUBLIC_FINHUB_API_KEY=your_finhub_api_key_here
	```
4. Start the development server:
	```bash
	pnpm dev
	# or
	npm run dev
	# or
	yarn dev
	```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
blott-web-assessment/
├── public/
│   └── images/           # Static images (logo, icons, etc.)
├── src/
│   ├── app/
│   │   ├── _components/  # App-specific React components
│   │   ├── layout.tsx    # Root layout with SEO metadata
│   │   ├── page.tsx      # Main page (news feed)
│   │   └── globals.css   # Global styles
│   ├── components/       # Shared UI components
│   ├── lib/
│   │   ├── api/          # API calls (finhub.io)
│   │   ├── fonts/        # Custom fonts
│   │   ├── schemas/      # Zod schemas for type safety
│   │   └── utils/        # Utility functions
├── .env.local            # Environment variables (not committed)
├── env.example           # Environment variables example
├── package.json          # Project metadata and scripts
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Tech Stack

- [Next.js 15](https://nextjs.org/) — React framework for production
- [React 19](https://react.dev/) — UI library
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Zod](https://zod.dev/) — Type validation
- [Vitest](https://vitest.dev/) — Unit testing

## License

This project is for educational and assessment purposes.
