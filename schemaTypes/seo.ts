import { defineType, defineField } from 'sanity'

// Reusable SEO object that can be embedded in any document
export const seoField = {
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      description: 'Title shown in search engine results (50-60 characters recommended)',
      validation: (Rule) => Rule.max(60).warning('Title should be under 60 characters for best results'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description shown in search engine results (150-160 characters recommended)',
      validation: (Rule) => Rule.max(160).warning('Description should be under 160 characters for best results'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Relevant keywords for this page (comma-separated)',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Preferred URL for this page (leave empty to use current page URL)',
    }),
    defineField({
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
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      description: 'Title for social media sharing (if different from meta title)',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      description: 'Description for social media sharing (if different from meta description)',
    }),
    defineField({
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
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page',
      initialValue: false,
    }),
    defineField({
      name: 'noFollow',
      title: 'No Follow',
      type: 'boolean',
      description: 'Prevent search engines from following links on this page',
      initialValue: false,
    }),
    defineField({
      name: 'structuredData',
      title: 'Structured Data (JSON-LD)',
      type: 'text',
      rows: 10,
      description: 'Advanced: Add custom JSON-LD structured data for rich snippets',
    }),
  ],
}

// Standalone SEO document for global/default SEO settings
export default defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Frames by Fodrix',
    }),
    defineField({
      name: 'defaultTitle',
      title: 'Default Meta Title',
      type: 'string',
      description: 'Default title if page-specific title is not set',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'defaultDescription',
      title: 'Default Meta Description',
      type: 'text',
      description: 'Default description if page-specific description is not set',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'defaultKeywords',
      title: 'Default Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Global keywords applied to all pages',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
      description: 'Your website URL (e.g., https://frame.fodrix.com)',
    }),
    defineField({
      name: 'logo',
      title: 'Logo for SEO',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Logo image for structured data',
    }),
    defineField({
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      description: 'Your Twitter username (without @)',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Page URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'googleVerification',
      title: 'Google Verification Code',
      type: 'string',
      description: 'Google Search Console verification code',
    }),
    defineField({
      name: 'bingVerification',
      title: 'Bing Verification Code',
      type: 'string',
      description: 'Bing Webmaster Tools verification code',
    }),
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'GA4 Measurement ID (e.g., G-XXXXXXXXXX)',
    }),
    defineField({
      name: 'googleTagManagerId',
      title: 'Google Tag Manager ID',
      type: 'string',
      description: 'GTM Container ID (e.g., GTM-XXXXXXX)',
    }),
  ],
  preview: {
    select: {
      siteName: 'siteName',
      siteUrl: 'siteUrl',
    },
    prepare(selection) {
      const { siteName, siteUrl } = selection
      return {
        title: 'SEO Settings',
        subtitle: siteName || siteUrl || 'Global SEO configuration',
      }
    },
  },
})

