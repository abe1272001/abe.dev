import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Balancer from 'react-wrap-balancer'

import { Mdx } from '@/components/mdx-components'
import AppComments from '@/components/molecules/app-comments'
import AppPageTitle from '@/components/molecules/app-page-title'

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params.slug.join('/')
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    null
  }

  return post
}

export const generateStaticParams = async (): Promise<PostProps['params'][]> =>
  allPosts.map((post) => ({
    slug: post.slug.split('/'),
  }))

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.summary,
  }
}

const PostPage = async ({ params }: PostProps) => {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className=" py-8">
      <div className="mb-8 flex flex-col gap-8 text-center">
        <time
          dateTime={post.date}
          className="mb-1 text-sm text-gray-600 dark:text-gray-200"
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <AppPageTitle>
          <Balancer>{post.title}</Balancer>
        </AppPageTitle>
        {post.summary && <p className="text-xl">{post.summary}</p>}
        <p className="text-right text-sm text-gray-600 dark:text-gray-200">
          {post.readingTime.text}
        </p>
      </div>
      <hr className="my-6" />
      <div className="prose mx-auto max-w-3xl dark:prose-invert">
        <Mdx code={post.body.code} />
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <AppComments />
      </div>
    </article>
  )
}

export default PostPage
