'use client'

import { useEffect, useRef, useState } from 'react'
import { copyToClipboard } from '@/utils/copyToClipboard'
import { Check, Copy } from 'lucide-react'

import { removeDuplicateNewLine } from '@/lib/removeDuplicateNewLine'
import { cn } from '@/lib/utils'

type Props = React.ComponentPropsWithoutRef<'pre'>

export const Pre = ({ children, className, ...props }: Props) => {
  const preRef = useRef<HTMLPreElement>(null)

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000)

    return () => clearTimeout(timer)
  }, [copied])

  const onClick = async () => {
    if (preRef.current?.innerText) {
      await copyToClipboard(removeDuplicateNewLine(preRef.current.innerText))
      setCopied(true)
    }
  }

  return (
    <div className="group relative">
      <pre
        {...props}
        ref={preRef}
        className={cn(className, 'focus:outline-none')}
      >
        <div className="absolute right-0 top-0 m-2 flex items-center space-x-2">
          <span
            className={cn('hidden text-xs text-green-400 fade-in', {
              'group-hover:flex': copied,
            })}
          >
            Copied!
          </span>

          <button
            type="button"
            aria-label="Copy to Clipboard"
            onClick={onClick}
            disabled={copied}
            className={cn(
              'hidden rounded-md border bg-transparent p-2 transition fade-in focus:outline-none group-hover:flex',
              {
                'border-green-400': copied,
                'hover:border-gray-500 focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50 dark:border-gray-700 dark:hover:border-gray-400':
                  !copied,
              }
            )}
          >
            <div
              className={cn({
                'text-gray-500 dark:text-gray-400': !copied,
                'text-green-400': copied,
              })}
            >
              <Copy
                className={cn(
                  { block: !copied, hidden: copied },
                  'pointer-events-none h-4 w-4'
                )}
              />

              <Check
                className={cn(
                  { block: copied, hidden: !copied },
                  'pointer-events-none h-4 w-4'
                )}
              />
            </div>
          </button>
        </div>

        {children}
      </pre>
    </div>
  )
}
