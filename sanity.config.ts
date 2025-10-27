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
                  .filter(Boolean)
                  .sort()
                
                return S.list()
                  .title('Frame Subcategories')
                  .items([
                    S.divider(),
                    // Dynamic subcategory items
                    ...uniqueSubCategories.map(subCategory =>
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
            
            // Add a divider
            S.divider(),
            
            // Keep other document types
            ...S.documentTypeListItems().filter(
              listItem => !['preDesignFrames', 'singleCustomFrame', 'multipleCustomFrame'].includes(listItem.getId() as string)
            )
          ])
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})