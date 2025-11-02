import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'frame.fodrix',

  projectId: 'z1uu6bun',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            // Pre-Designed Frames with subcategory grouping
            S.listItem()
              .title('Pre Design Frames')
              .child(async () => {
                // Fetch unique subcategories
                const client = context.getClient({apiVersion: '2023-01-01'})
                const query = `*[_type == "preDesignFrames" && defined(subCategory)] | order(subCategory asc) {
                  "subCategory": subCategory
                } | order(subCategory asc)`
                
                const frames = await client.fetch(query)
                const uniqueSubCategories = [...new Set(frames.map((f: any) => f.subCategory))]
                  .filter((subCategory): subCategory is string => typeof subCategory === 'string' && subCategory.length > 0)
                  .sort()
                
                return S.list()
                  .title('Frame Subcategories')
                  .items([
                    S.divider(),
                    // Dynamic subcategory items
                    ...uniqueSubCategories.map((subCategory: string) =>
                      S.listItem()
                        .title(subCategory)
                        .child(
                          S.documentList()
                            .title(`${subCategory}`)
                            .filter('_type == "preDesignFrames" && subCategory == $subCategory')
                            .params({ subCategory })
                            .defaultOrdering([
                              {field: 'title', direction: 'asc'}
                            ])
                        )
                    )
                  ])
              }),
            
            // Single Custom Frame
            S.listItem()
              .title('Single Custom Frame')
              .child(
                S.documentList()
                  .title('Single Custom Frame')
                  .filter('_type == "singleCustomFrame"')
              ),
            
            // Multiple Custom Frame
            S.listItem()
              .title('Multiple Custom Frame')
              .child(
                S.documentList()
                  .title('Multiple Custom Frame')
                  .filter('_type == "multipleCustomFrame"')
              ),
            
            // Marketing Tools
            S.listItem()
              .title('Marketing Tools')
              .child(
                S.documentList()
                  .title('Marketing Tools')
                  .filter('_type == "marketingTools"')
              ),
            
            // FAQ
            S.listItem()
              .title('FAQ')
              .child(
                S.documentList()
                  .title('FAQ')
                  .filter('_type == "faq"')
                  .defaultOrdering([{field: 'order', direction: 'asc'}])
              ),
            
            // Privacy Policy
            S.listItem()
              .title('Privacy Policy')
              .child(
                S.documentList()
                  .title('Privacy Policy')
                  .filter('_type == "privacyPolicy"')
              ),
            
            // Terms of Service
            S.listItem()
              .title('Terms of Service')
              .child(
                S.documentList()
                  .title('Terms of Service')
                  .filter('_type == "termsOfService"')
              ),
            
            // Reviews
            S.listItem()
              .title('Reviews')
              .child(
                S.documentList()
                  .title('Reviews')
                  .filter('_type == "review"')
                  .defaultOrdering([{field: 'featured', direction: 'desc'}, {field: 'order', direction: 'asc'}])
              ),
            
            // Social Links
            S.listItem()
              .title('Social Links')
              .child(
                S.documentList()
                  .title('Social Links')
                  .filter('_type == "socialLinks"')
              ),
            
            // Add a divider
            S.divider(),
            
            // Keep other document types
            ...S.documentTypeListItems().filter(
              listItem => !['preDesignFrames', 'singleCustomFrame', 'multipleCustomFrame', 'marketingTools', 'faq', 'privacyPolicy', 'termsOfService', 'review', 'socialLinks'].includes(listItem.getId() as string)
            )
          ])
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})