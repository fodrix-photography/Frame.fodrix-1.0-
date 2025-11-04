export const seoObject = {
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      description: 'Title shown in search engine results (50-60 characters recommended)',
      validation: (Rule: any) => Rule.max(60).warning('Title should be under 60 characters for best results'),
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description shown in search engine results (150-160 characters recommended)',
      validation: (Rule: any) => Rule.max(160).warning('Description should be under 160 characters for best results'),
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Relevant keywords for this page (comma-separated)',
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Preferred URL for this page (leave empty to use current page URL)',
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
      description: 'Image shown when sharing on social media (recommended: 1200x630px)',
    },
    {
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Title for social media sharing (if different from meta title)',
    },
    {
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      description: 'Description for social media sharing (if different from meta description)',
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card Type',
      type: 'string',
      options: {
        list: [
          { title: 'Summary', value: 'summary' },
          { title: 'Summary Large Image', value: 'summary_large_image' },
        ],
      },
      initialValue: 'summary_large_image',
      description: 'Type of Twitter card to display',
    },
    {
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page',
      initialValue: false,
    },
    {
      name: 'noFollow',
      title: 'No Follow',
      type: 'boolean',
      description: 'Prevent search engines from following links on this page',
      initialValue: false,
    },
    {
      name: 'structuredData',
      title: 'Structured Data (JSON-LD)',
      type: 'text',
      rows: 10,
      description: 'Advanced: Add custom JSON-LD structured data for rich snippets',
    },
  ],
}

