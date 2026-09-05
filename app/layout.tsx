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
  title: 'Nae Pathsharasakon — Junior IT Business Analyst & Project Coordinator',
  description: 'From rhythm to systems: portfolio of Nae Pathsharasakon, a Junior IT Business Analyst and Project Coordinator connecting user needs, system thinking and collaborative delivery.',
  openGraph: {
    title: 'People → Systems → Progress.',
    description: 'Nae Pathsharasakon · Junior IT Business Analyst & Project Coordinator',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'People → Systems → Progress.',
    description: 'Nae Pathsharasakon · Junior IT Business Analyst & Project Coordinator',
    images: ['/og.png'],
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
