import type { Metadata } from 'next';
import { fontVars } from '../fonts';
import { content } from '@/content/content';
import '../globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dev.mariacacacho.com';
const t = content.en.meta;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: t.title,
  description: t.description,
  alternates: { canonical: '/en', languages: { es: '/', en: '/en' } },
  openGraph: {
    title: t.title,
    description: t.description,
    url: '/en',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/maria.jpg', width: 1100, height: 1467, alt: 'María Pacheco' }],
  },
  twitter: { card: 'summary_large_image', title: t.title, description: t.description, images: ['/images/maria.jpg'] },
};

export default function RootLayoutEn({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
