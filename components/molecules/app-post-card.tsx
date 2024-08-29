import Link from 'next/link'
import { CoreContent } from '@/utils/contentlayer'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

import AppPostTag from '@/components/molecules/app-post-tag'

export default function AppPostCard(post: CoreContent<Post>) {
  return (
    <li className="py-4">
      <article>
        <h2 className="text-2xl font-bold leading-8 tracking-tight">
          <Link href={post.path} className="text-gray-900 dark:text-gray-100">
            {post.title}
          </Link>
        </h2>
        <div className="my-2 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <AppPostTag key={tag} text={tag} />
          ))}
        </div>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <p className="text-sm">{post.summary}</p>
      </article>
    </li>
  )
}
