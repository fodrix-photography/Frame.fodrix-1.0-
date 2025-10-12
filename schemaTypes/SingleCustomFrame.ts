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
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    }
  }
};
