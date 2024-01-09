import Image from 'next/image'
import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { Pre } from './Pre'

const mdxComponents: MDXComponents = {
  Image: (props) => <Image {...props} alt={props?.alt} />,
  pre: (props) => <Pre {...props} />,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code)

  return <MDXContent components={mdxComponents} />
}
