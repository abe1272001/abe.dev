import './globals.css'
import '@/css/prism-plus.css'
import '@/css/prism-one-dark.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import siteMetadata from '@/data/siteMetadata'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { Analytics, AnalyticsConfig } from 'analytics'

import { Footer } from '@/components/footer'
import Header from '@/components/header'
import SectionContainer from '@/components/section-container'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const basePath = process.env.BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: `${siteMetadata.title} | ${siteMetadata.author}`,
    template: `%s | ${siteMetadata.author}`,
  },
  description: siteMetadata.description,
  icons: {
    icon: {
      url: `${basePath}/static/favicons/favicon.ico`,
    },
    shortcut: `${basePath}/static/favicons/favicon.ico`,
    apple: `${basePath}/static/favicons/apple-touch-icon.png`,
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: `${basePath}/static/favicons/favicon-32x32.png`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: `${basePath}/static/favicons/favicon-16x16.png`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: `${basePath}/static/favicons/android-chrome-192x192.png`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: `${basePath}/static/favicons/android-chrome-512x512.png`,
      },
    ],
  },
  manifest: `${basePath}/static/favicons/site.webmanifest`,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: `${basePath}/`,
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
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={roboto.className}>
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
        <VercelAnalytics />
        <Analytics
          analyticsConfig={siteMetadata.analytics as AnalyticsConfig}
        />
      </body>
    </html>
  )
}
