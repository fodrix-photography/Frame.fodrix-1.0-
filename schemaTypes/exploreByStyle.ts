import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'exploreByStyle',
  title: 'Explore by Style Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Explore by Style',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle/Description',
      type: 'string',
      initialValue: 'Find the perfect frame style to complement your space and personality',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'category',
          title: 'Category',
          fields: [
            {
              name: 'name',
              title: 'Category Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                },
              ],
            },
            {
              name: 'count',
              title: 'Count Text',
              type: 'string',
              description: 'e.g., "120+ frames", "45+ sets"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number',
              description: 'Lower numbers appear first',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
              media: 'image',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled',
                subtitle: subtitle || 'No description',
                media,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).error('You must have at least one category'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Explore by Style Section',
        subtitle: 'Manage categories and content for the Explore by Style section',
      }
    },
  },
})

