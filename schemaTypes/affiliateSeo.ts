import { defineType } from 'sanity'
import { seoObject } from './seoObject'

export default defineType({
  name: 'affiliateSeo',
  title: 'Affiliate Program SEO',
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
        title: title || 'Affiliate Program SEO',
        subtitle: 'SEO settings for the affiliate program page',
      }
    },
  },
})

