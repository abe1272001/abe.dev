'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">Abe.dev</h1>
      <button
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  )
}
