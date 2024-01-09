'use client'

import Image from 'next/image'
import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { Pre } from './Pre'

const mdxComponents: MDXComponents = {
  Image: (props) => <Image {...props} alt={props?.alt} />,
  pre: Pre,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code)

  return <MDXContent components={mdxComponents} />
}
