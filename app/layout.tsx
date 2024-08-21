import './globals.css'
import '@/css/prism-plus.css'
import '@/css/prism-one-dark.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import siteMetadata from '@/data/siteMetadata'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { Analytics, AnalyticsConfig } from 'analytics'

import { Footer } from '@/components/layout/footer'
import Header from '@/components/layout/header'
import SectionContainer from '@/components/layout/section-container'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: `${siteMetadata.title} | ${siteMetadata.author}`,
    template: `%s | ${siteMetadata.author}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: siteMetadata.locale,
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${basePath}/static/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <link
        rel="manifest"
        href={`${basePath}/static/favicons/site.webmanifest`}
      />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SectionContainer>
            <Header />
            <main className="min-h-[calc(100vh-var(--header-height)-var(--footer-height))] py-3">
              {children}
            </main>
            <Footer />
          </SectionContainer>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
      <VercelAnalytics />
      <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
    </html>
  )
}
