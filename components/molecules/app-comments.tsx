'use client'

import siteMetadata from '@/data/siteMetadata'
import Giscus from '@giscus/react'
import type { BooleanString, Mapping, Repo } from '@giscus/react'
import { useTheme } from 'next-themes'

const AppComments = () => {
  const COMMENTS_ID = 'comments-container'
  const { theme } = useTheme()

  if (!siteMetadata.comments?.provider) {
    return null
  }

  return (
    <Giscus
      id={COMMENTS_ID}
      repo={siteMetadata.comments.giscusConfig.repo as Repo}
      repoId={siteMetadata.comments.giscusConfig.repositoryId as string}
      category={siteMetadata.comments.giscusConfig.category as string}
      categoryId={siteMetadata.comments.giscusConfig.categoryId as string}
      mapping={siteMetadata.comments.giscusConfig.mapping as Mapping}
      reactionsEnabled={
        siteMetadata.comments.giscusConfig.reactions as BooleanString
      }
      emitMetadata={
        siteMetadata.comments.giscusConfig.metadata as BooleanString
      }
      inputPosition="top"
      theme={theme}
      lang={siteMetadata.comments.giscusConfig.lang as string}
      loading="lazy"
    />
  )
}

export default AppComments
