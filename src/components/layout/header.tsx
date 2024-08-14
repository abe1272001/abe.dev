import React from 'react'
import Link from 'next/link'

import { ThemeSwitcher } from '@/components/theme-switcher'

export default function Header() {
  return (
    <header className="flex h-[var(--header-height)] items-center justify-between py-4">
      <Link className="text-2xl font-bold" href="/">
        Abe.dev
      </Link>

      <ThemeSwitcher />
    </header>
  )
}
