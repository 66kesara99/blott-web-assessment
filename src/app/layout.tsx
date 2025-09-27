import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://acme.com"),
  title: "Blott News | Latest Financial News & Market Updates",
  description:
    "Stay updated with the latest financial news, market trends, and insights from www.finhub.io.",
  keywords: [
    "finance",
    "news",
    "finhub",
    "market",
    "stocks",
    "crypto",
    "latest",
    "updates",
  ],
  authors: [{ name: "Kesara Gamlath", url: "https://66kesara99.github.io/" }],
  openGraph: {
    title: "Blott News | Latest Financial News & Market Updates",
    description:
      "Stay updated with the latest financial news, market trends, and insights from www.finhub.io.",
    type: "website",
    siteName: "Blott News",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blott News | Latest Financial News & Market Updates",
    description:
      "Stay updated with the latest financial news, market trends, and insights from www.finhub.io.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black mx-auto px-[20px] container">{children}</body>
    </html>
  );
}
