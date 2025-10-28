export default {
    name: 'multipleCustomFrame',
    title: 'Multiple Custom Frame',
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
            name: 'sizes',
            title: 'Available Sizes',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'size',
                            title: 'Size',
                            type: 'string',
                            description: 'Frame size (e.g. 8x10, 10x12)',
                        }
                    ],
                },
            ],
            description: 'Different sizes of the frame',
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
        {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Toggle to show this frame in the featured collection on the home page',
            initialValue: false,
        },
    ],
    preview: {
        select: {
            title: 'title',
            image: 'image',
        }
    }
};
