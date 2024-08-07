import Link from 'next/link'
import { Github, TwitterIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex min-h-[var(--footer-height)] justify-center border-t border-gray-200 pt-3 dark:border-gray-600">
      <div className="flex flex-col justify-between py-4">
        <nav className="space-x-6 text-center text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="flex items-center justify-center gap-3">
          <a
            target="_blank"
            href="https://twitter.com/abe_chen1212"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-secondary-foreground hover:text-blue-500  dark:hover:text-blue-400"
          >
            <TwitterIcon className="size-6 fill-current" />
          </a>
          <a
            target="_blank"
            href="https://github.com/abe1272001"
            rel="noopener noreferrer"
            aria-label="Github"
            className="text-secondary-foreground hover:text-blue-500  dark:hover:text-blue-400"
          >
            <Github />
          </a>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} <Link href="/">Abe Chen</Link>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
