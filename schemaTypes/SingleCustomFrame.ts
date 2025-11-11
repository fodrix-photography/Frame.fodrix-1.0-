import { seoObject } from './seoObject'

export default {
  name: 'singleCustomFrame',
  title: 'Single Custom Frame',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the frame',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the frame',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'quality',
      title: 'Quality',
      type: 'string',
      description: 'Quality of the frame',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      description: 'Size of the frame',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the frame',
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
      description: 'Category of the frame',
    },
    {
      name: 'subCategory',
      title: 'Sub Category',
      type: 'string',
      description: 'Sub Category of the frame',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the frame',
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
      image: 'image',
    }
  }
};
