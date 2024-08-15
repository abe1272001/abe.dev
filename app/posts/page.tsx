import Link from 'next/link'
import { allCoreContent, CoreContent, sortPosts } from '@/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { allPosts, Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

import AppBlogTag from '@/components/molecules/app-blog-tag'

export const metadata = genPageMetadata({ title: 'Blog' })

function PostCard(post: CoreContent<Post>) {
  return (
    <li className="py-4">
      <article>
        <h2 className="text-2xl font-bold leading-8 tracking-tight">
          <Link href={post.path} className="text-gray-900 dark:text-gray-100">
            {post.title}
          </Link>
        </h2>
        <div className="my-2 flex flex-wrap">
          {post.tags.map((tag) => (
            <AppBlogTag key={tag} text={tag} />
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

export default function PostsPage() {
  const posts = allCoreContent(sortPosts(allPosts))

  return (
    <>
      <h1 className="pb-8 pt-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-10">
        All Posts 👇🏽
      </h1>
      <ul className="mt-4 flex flex-col gap-2 divide-y divide-gray-200 dark:divide-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </ul>
    </>
  )
}
