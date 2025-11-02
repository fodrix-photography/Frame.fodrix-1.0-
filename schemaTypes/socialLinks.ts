import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'document',
  fields: [
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      description: 'Facebook page URL',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      description: 'Instagram profile URL',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter/X URL',
      type: 'url',
      description: 'Twitter/X profile URL',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
      description: 'YouTube channel URL',
    }),
  ],
  preview: {
    select: {
      title: '_id',
    },
    prepare() {
      return {
        title: 'Social Links',
        subtitle: 'Manage all social media links',
      }
    },
  },
})

