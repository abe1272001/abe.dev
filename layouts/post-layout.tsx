import Link from 'next/link'
import { CoreContent } from '@/utils/contentlayer'
import type { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Balancer from 'react-wrap-balancer'

import AppComments from '@/components/molecules/app-comments'
import AppPageTitle from '@/components/molecules/app-page-title'
import AppPostTag from '@/components/molecules/app-post-tag'
import ScrollTopAndComment from '@/components/scroll-top-and-comment'

interface PostLayoutProps {
  children: React.ReactNode
  content: CoreContent<Post>
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({
  children,
  content,
  next,
  prev,
}: PostLayoutProps) {
  const { date, title, summary, readingTime, tags } = content

  return (
    <>
      <ScrollTopAndComment />
      <article className="py-8">
        <header className="mb-8 flex flex-col gap-8 text-center">
          <time
            dateTime={date}
            className="mb-1 text-sm text-gray-600 dark:text-gray-200"
          >
            {format(parseISO(date), 'LLLL d, yyyy')}
          </time>
          <AppPageTitle>
            <Balancer>{title}</Balancer>
          </AppPageTitle>
          {summary && <p className="text-xl">{summary}</p>}
          <p className="text-right text-sm text-gray-600 dark:text-gray-200">
            {readingTime.text}
          </p>
        </header>
        <hr className="my-6" />
        <div className="prose mx-auto max-w-3xl dark:prose-invert">
          {children}
        </div>
        <footer className="mt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:divide-y">
            {tags && (
              <div className="flex flex-col gap-3 py-4 xl:py-8">
                <h2 className="text-xs uppercase text-gray-500 dark:text-gray-400">
                  Tags
                </h2>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <AppPostTag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            )}
            {(next || prev) && (
              <div className="flex justify-between gap-2 py-4">
                {prev && prev.path && (
                  <div className="flex-1 text-left">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Previous Article
                    </h2>
                    <div className="text-lg text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <Link href={`/${prev.path}`}>{prev.title}</Link>
                    </div>
                  </div>
                )}
                {next && next.path && (
                  <div className="flex-1 text-right">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Next Article
                    </h2>
                    <div className="text-lg text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <Link href={`/${next.path}`}>{next.title}</Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </footer>
        <div className="mx-auto mt-6 max-w-3xl">
          <AppComments />
        </div>
      </article>
    </>
  )
}
