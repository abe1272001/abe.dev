import AuthorLayout from '@/layouts/author-layout'
import { genPageMetadata } from 'app/seo'
import { allAuthors, Author } from 'contentlayer/generated'

import { MDXRenderer } from '@/components/mdx-components'

export const metadata = genPageMetadata({ title: 'About Me' })

const Page = () => {
  const author = allAuthors.find((p) => p.slug === 'default') as Author

  return (
    <AuthorLayout>
      <MDXRenderer code={author.body.code} />
    </AuthorLayout>
  )
}

export default Page
