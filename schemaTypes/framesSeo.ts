import { defineType } from 'sanity'
import { seoObject } from './seoObject'

export default defineType({
  name: 'framesSeo',
  title: 'Frames Listing SEO',
  type: 'document',
  fields: [
    seoObject,
  ],
  preview: {
    select: {
      title: 'seo.title',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title || 'Frames Listing SEO',
        subtitle: 'SEO settings for the frames listing page',
      }
    },
  },
})

