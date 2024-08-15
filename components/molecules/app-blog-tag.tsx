import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

const AppBlogTag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 rounded border px-2 text-sm font-medium uppercase text-primary-500 hover:border-primary-600 hover:text-primary-600 dark:border-gray-600 dark:hover:border-primary-400 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default AppBlogTag
