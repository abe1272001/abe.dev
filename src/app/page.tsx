import Link from 'next/link'
import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

function PostCard(post: Post) {
  return (
    <div className="mb-2 w-full">
      <Link href={post.path} className="text-blue-700 hover:text-blue-900">
        <h2 className="text-xl">{post.title}</h2>
      </Link>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm">{post.description}</div>
    </div>
  )
}

export default function HomePage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="flex size-full flex-col items-center justify-between py-3">
      <h2 className="text-xl">Hi, I am Abe Chen 👋🏻</h2>
      <hr />
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
