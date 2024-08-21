import { allCoreContent, sortPosts } from '@/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { allPosts } from 'contentlayer/generated'

import AppPostCard from '@/components/molecules/app-post-card'

export const metadata = genPageMetadata({ title: 'Posts' })

export default function PostsPage() {
  const posts = allCoreContent(sortPosts(allPosts))

  return (
    <>
      <h1 className="pb-8 pt-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-10">
        All Posts 👇🏽
      </h1>
      <ul className="mt-4 flex flex-col gap-2 divide-y divide-gray-200 dark:divide-gray-700">
        {posts.map((post, idx) => (
          <AppPostCard key={idx} {...post} />
        ))}
      </ul>
    </>
  )
}
