'use client'

import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { ArrowUp, MessageSquareMoreIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }
  const handleScrollToComment = () => {
    document.getElementById('comments-container')?.scrollIntoView()
  }
  return (
    <div
      className={cn(
        'fixed bottom-8 right-8 hidden flex-col gap-3',
        show ? 'md:flex' : 'md:hidden'
      )}
    >
      {siteMetadata.comments?.provider && (
        <button
          aria-label="Scroll To Comment"
          onClick={handleScrollToComment}
          className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
        >
          <MessageSquareMoreIcon className="size-5" />
        </button>
      )}
      <button
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <ArrowUp className="size-5" />
      </button>
    </div>
  )
}

export default ScrollTopAndComment
