import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IT Nesto | Software, AI & Digital Services | USA & Global',
  description: 'IT Nesto delivers web development, mobile apps, AI systems, SEO, and digital marketing for businesses across the USA, UAE, and worldwide. Book a free discovery call.',
  openGraph: {
    title: 'IT Nesto | Software, AI & Digital Services — USA, UAE, Worldwide',
    description: 'Web apps, mobile, AI agents, RAG, SEO, design, and marketing. One team for every digital need. Free 45-min discovery call.',
    type: 'website',
    images: [{ url: '/assets/itnesto-og-1200x630.jpg', width: 1200, height: 630, alt: 'IT Nesto' }],
  },
  twitter: { card: 'summary_large_image', images: ['/assets/itnesto-og-1200x630.jpg'] },
  icons: { icon: '/assets/itnesto-icon-512.png', apple: '/assets/itnesto-icon-512.png' },
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
