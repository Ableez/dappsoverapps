import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DappsOverApps | Decentralized Applications Platform",
  description:
    "Discover and explore the best decentralized applications (dApps) across various blockchain networks. Your gateway to the future of web3.",
  keywords: [
    "dApps",
    "blockchain",
    "web3",
    "decentralized applications",
    "crypto",
    "defi",
    "nft",
  ],
  authors: [{ name: "Asterisk DA" }],
  creator: "DappsOverApps",
  publisher: "DappsOverApps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dappsoverapps.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dappsoverapps.com",
    title: "DappsOverApps | Decentralized Applications Platform",
    description:
      "Discover and explore the best decentralized applications (dApps) across various blockchain networks. Your gateway to the future of web3.",
    siteName: "DappsOverApps",
  },
  twitter: {
    card: "summary_large_image",
    title: "DappsOverApps | Decentralized Applications Platform",
    description:
      "Discover and explore the best decentralized applications (dApps) across various blockchain networks. Your gateway to the future of web3.",
    creator: "@dappsoverapps",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
