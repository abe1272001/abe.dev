import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import PostLayout from '@/layouts/post-layout'
import { allCoreContent, coreContent, sortPosts } from '@/utils/contentlayer'
import { allPosts, Post } from 'contentlayer/generated'

import { MDXRenderer } from '@/components/mdx-components'

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
}: PostProps): Promise<Metadata | undefined> {
  const post = await getPostFromParams(params)

  if (!post) return

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'zh_TW',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: [siteMetadata.socialBanner],
      authors: [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [siteMetadata.socialBanner],
    },
  }
}

const PostPage = async ({ params }: PostProps) => {
  const slug = decodeURI(params.slug.join('/'))
  const sortedCoreContents = allCoreContent(sortPosts(allPosts))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = allPosts.find((p) => p.slug === slug) as Post

  const mainContent = coreContent(post)

  const jsonLd = post.structuredData

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostLayout content={mainContent} next={next} prev={prev}>
        <MDXRenderer code={post.body.code} />
      </PostLayout>
    </>
  )
}

export default PostPage
