import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IT Nesto | Software, AI & Digital Services | USA & Global',
  description: 'IT Nesto delivers web development, mobile apps, AI systems, SEO, and digital marketing for businesses across the USA, UAE, and worldwide. Book a free discovery call.',
  keywords: 'IT services USA, software development company, AI integration services, web development, mobile app development, SEO services, digital marketing, IT company UAE',
  openGraph: {
    title: 'IT Nesto | Software, AI & Digital Services — USA, UAE, Worldwide',
    description: 'Web apps, mobile, AI agents, RAG, SEO, design, and marketing. One team for every digital need. Free 45-min discovery call.',
    type: 'website',
    url: 'https://itnesto.com',
  },
  twitter: { card: 'summary_large_image' },
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
