'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { cn } from '@/lib/utils'

const AppMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="size-8 rounded"
        aria-label="Toggle Menu"
        onClick={toggleMenu}
      >
        <Menu className={cn('size-8', isOpen ? 'hidden' : 'block')} />
      </button>
      <AnimatePresence>
        <motion.div
          className="fixed left-0 top-0 z-10 block size-full bg-gray-200 opacity-95 dark:bg-gray-800"
          animate={isOpen ? 'open' : 'closed'}
          initial="closed"
          exit="closed"
          variants={{
            open: {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              borderRadius: '0%',
            },
            closed: {
              x: '100%',
              y: '-100%',
              scale: 0,
              opacity: 0,
              borderRadius: '100%',
            },
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut', // 使用 ease-out 曲線
          }}
        >
          <button
            type="button"
            className="fixed right-4 top-4 size-8 rounded"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
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
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AppMobileNav
