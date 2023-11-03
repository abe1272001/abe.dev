import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import type { ComputedFields } from 'contentlayer/source-files'
import readingTime from 'reading-time'

const computedFields: ComputedFields = {
  path: {
    type: 'string',
    resolve: (doc) => `/posts/${doc.slug}`,
  },
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.md',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post],
})
