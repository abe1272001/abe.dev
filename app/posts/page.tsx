import Link from 'next/link'
import { allCoreContent, CoreContent, sortPosts } from '@/utils/contentlayer'
import { allPosts, Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

import AppBlogTag from '@/components/molecules/app-blog-tag'

function PostCard(post: CoreContent<Post>) {
  return (
    <div>
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
      <div className="text-sm">{post.summary}</div>
    </div>
  )
}

export default function PostsIndexPage() {
  const posts = allCoreContent(sortPosts(allPosts))

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
