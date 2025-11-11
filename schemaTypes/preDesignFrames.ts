import { seoObject } from './seoObject'

export default {
  name: 'preDesignFrames',
  title: 'Pre Design Frames',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'quality',
      title: 'Quality',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      description: 'Original price before discount (optional)',
      validation: (Rule: any) => Rule.min(0),
    },
    {
      name: 'discountedPrice',
      title: 'Discounted Price',
      type: 'number',
      description: 'Discounted price (optional)',
      validation: (Rule: any) => Rule.min(0),
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      description: 'Discount percentage (optional)',
      validation: (Rule: any) => Rule.min(0).max(100),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subCategory',
      title: 'Sub Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Toggle to show this frame in the featured collection on the home page',
      initialValue: false,
    },
    seoObject,
  ],
  preview: {
    select: {
      title: 'title',
      subCategory: 'subCategory',
      category: 'category',
      image: 'image',
      price: 'price',
    },
    prepare({ title, subCategory, category, image, price }: any) {
      return {
        title: title || 'Untitled',
        subtitle: `${category || 'No category'} → ${subCategory || 'No subcategory'} • ₹${price || 0}`,
        media: image,
      };
    },
  },
  orderings: [
    {
      title: 'Category A-Z',
      name: 'categoryAsc',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
    {
      title: 'Subcategory A-Z',
      name: 'subcategoryAsc',
      by: [
        { field: 'subCategory', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
    {
      title: 'Price Low-High',
      name: 'priceAsc',
      by: [{ field: 'price', direction: 'asc' }],
    },
    {
      title: 'Price High-Low',
      name: 'priceDesc',
      by: [{ field: 'price', direction: 'desc' }],
    },
  ],
};