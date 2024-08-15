import React from 'react'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'

import AppMobileNav from '@/components/molecules/app-mobile-nav'
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function Header() {
  return (
    <header className="flex h-[var(--header-height)] items-center justify-between py-4">
      <Link className="text-2xl font-bold" href="/">
        {siteMetadata.headerTitle}
      </Link>

      <div className="flex items-center gap-3 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <ThemeSwitcher />
        <AppMobileNav />
      </div>
    </header>
  )
}
