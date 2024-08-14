'use client'

import { useState } from 'react'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const AppMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="mx-1 size-8 rounded"
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className={`size-8 ${isOpen ? 'hidden' : 'block'}`} />
      </button>
      <motion.div
        className="fixed left-0 top-0 z-10 block size-full bg-gray-200 opacity-95 dark:bg-gray-800"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: '100%' },
        }}
        transition={{ duration: 0.2, ease: 'easeIn' }}
      >
        <button
          type="button"
          className="fixed right-4 top-4 size-8 rounded"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <X className={`size-8 ${isOpen ? 'block' : 'hidden'}`} />
        </button>
        <nav className="fixed mt-16 h-full">
          <ul>
            {headerNavLinks.map((link) => (
              <li key={link.title} className="px-12 py-4">
                <Link
                  href={link.href}
                  className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </div>
  )
}

export default AppMobileNav
