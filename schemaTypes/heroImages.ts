import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'heroImages',
  title: 'Hero Section Images',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Hero Images',
      readOnly: true,
    }),
    defineField({
      name: 'images',
      title: 'Hero Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'heroImage',
          title: 'Hero Image',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'position',
              title: 'Position',
              type: 'string',
              description: 'Select the position of this image in the grid',
              options: {
                list: [
                  { title: 'Left Top', value: 'left-top' },
                  { title: 'Left Bottom', value: 'left-bottom' },
                  { title: 'Right Top', value: 'right-top' },
                  { title: 'Right Bottom', value: 'right-bottom' },
                ],
                layout: 'radio',
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'alt',
              subtitle: 'position',
              media: 'image',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled',
                subtitle: subtitle ? `Position: ${subtitle}` : 'No position',
                media,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(4).min(4).error('You must have exactly 4 images'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Hero Section Images',
        subtitle: 'Manage the 4 hero images and their positions',
      }
    },
  },
})

