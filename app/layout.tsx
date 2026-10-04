import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './eyeballs-theme.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://from-music-to-product-2026.pathsharasakon.chatgpt.site'),
  title: 'Pathsharasakon Po (Nae) — Junior IT Business Analyst',
  description: 'BA-oriented portfolio of Pathsharasakon Po (Nae): requirements, stakeholder discovery, backlog prioritization, Agile delivery and technical literacy.',
  openGraph: {
    title: 'People → Systems → Progress.',
    description: 'Requirements · stakeholder discovery · Agile delivery · technical literacy',
    images: [{ url: '/og-v2.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'People → Systems → Progress.',
    description: 'Requirements · stakeholder discovery · Agile delivery · technical literacy',
    images: ['/og-v2.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
