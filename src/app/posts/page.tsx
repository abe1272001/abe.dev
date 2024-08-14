import Link from 'next/link'
import { allCoreContent, CoreContent, sortPosts } from '@/utils/contentlayer'
import { allPosts, Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

function PostCard(post: CoreContent<Post>) {
  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link href={post.path} className="text-blue-700 hover:text-blue-900">
          {post.title}
        </Link>
      </h2>
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
    <div>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
