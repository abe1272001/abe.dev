import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Balancer from 'react-wrap-balancer'

import { Mdx } from '@/components/mdx-components'

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export const generateStaticParams = async (): Promise<PostProps['params'][]> =>
  allPosts.map((post) => ({ slug: post.slugAsParams.split('/') }))

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

const PostPage = async ({ params }: PostProps) => {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <div>
      {/* <aside>Hi</aside> */}
      <article className="prose mx-auto max-w-2xl py-8 dark:prose-invert">
        <div className="mb-8 text-center">
          <time
            dateTime={post.date}
            className="mb-1 text-xs text-gray-600 dark:text-gray-200"
          >
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <h1>
            <Balancer>{post.title}</Balancer>
          </h1>
          {post.description && <p className="text-xl">{post.description}</p>}
          <p className="text-right text-sm text-gray-600 dark:text-gray-200">
            {post.readingTime.text}
          </p>
        </div>
        <hr className="my-6" />
        <Mdx code={post.body.code} />
      </article>
    </div>
  )
}

export default PostPage
