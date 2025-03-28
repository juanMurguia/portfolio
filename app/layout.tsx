import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Juan Murguia | Front-end Developer",
  description:
    "Front-end developer focused on design and performance. Specialized in creating beautiful, responsive, and performant web applications.",
  keywords: [
    "front-end developer",
    "web developer",
    "software engineer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Juan Murguia" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Juan Murguia | Front-end Developer",
    description: "Front-end developer focused on design and performance",
    siteName: "Juan Murguia Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Murguia | Front-end Developer",
    description: "Front-end developer focused on design and performance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans bg-vscode-bg text-vscode-text min-h-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
