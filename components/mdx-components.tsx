import Image from 'next/image'
import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer2/hooks'

import { CustomPre } from './mdx/Pre'

const mdxComponents: MDXComponents = {
  Image: (props) => <Image {...props} alt={props?.alt} />,
  pre: (props) => <CustomPre {...props} />,
  Hidden: (props) => <div className="hidden" {...props} />,
}

interface MdxProps {
  code: string
}

export function MDXRenderer({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code)

  return <MDXContent components={mdxComponents} />
}
