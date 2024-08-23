import { ReactNode } from 'react'
import siteMetadata from '@/data/siteMetadata'

interface Props {
  children: ReactNode
}

export default function AuthorLayout({ children }: Props) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            About Me
          </h1>
          <p>{siteMetadata.description}</p>
        </div>
        <div className="prose max-w-none py-8 dark:prose-invert xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  )
}
