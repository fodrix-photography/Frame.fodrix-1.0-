export default {
  name: 'marketingTools',
  title: 'Marketing Tools',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the marketing tool',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the marketing tool',
    },
    {
      name: 'asset',
      title: 'Marketing Asset',
      type: 'object',
      description: 'Upload an image or video for marketing',
      fields: [
        {
          name: 'type',
          title: 'Asset Type',
          type: 'string',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'Video', value: 'video' },
            ],
            layout: 'radio',
          },
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          hidden: ({ parent }: any) => parent?.type !== 'image',
        },
        {
          name: 'video',
          title: 'Video',
          type: 'file',
          options: {
            accept: 'video/*',
          },
          hidden: ({ parent }: any) => parent?.type !== 'video',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category of the marketing tool (e.g., Social Media, Blog, Email)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'asset',
    },
    prepare({ title, category, media }: any) {
      return {
        title: title || 'Untitled',
        subtitle: category || 'No category',
        media: media?.image || media?.video,
      }
    },
  },
}

