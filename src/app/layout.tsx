import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import React from 'react';
import { siteConfig } from '../config/site.config';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.metaDescription,
  keywords: siteConfig.seo.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="text-gray-900 pb-0 font-sans flex flex-col min-h-screen relative bg-white selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}

