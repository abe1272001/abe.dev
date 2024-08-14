import './globals.css'
import '@/styles/prism-plus.css'
import '@/styles/prism-one-dark.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { Footer } from '@/components/layout/footer'
import Header from '@/components/layout/header'
import SectionContainer from '@/components/layout/section-container'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abe.dev',
  description: 'Abe dev blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
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
      <Analytics />
    </html>
  )
}
