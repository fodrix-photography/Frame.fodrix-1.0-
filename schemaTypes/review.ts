import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string',
      description: 'e.g., Interior Designer, Photography Blogger, Home Decor Influencer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Review Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating from 1 to 5 stars',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Review',
      type: 'boolean',
      description: 'Show this review prominently',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      name: 'name',
      role: 'role',
      rating: 'rating',
      media: 'image',
    },
    prepare(selection) {
      const { name, role, rating, media } = selection
      return {
        title: name || 'Unnamed Review',
        subtitle: `${role || 'No role'} • ${rating ? '⭐'.repeat(rating) : 'No rating'}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Order (Low to High)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [{ field: 'featured', direction: 'desc' }, { field: 'order', direction: 'asc' }],
    },
  ],
})

