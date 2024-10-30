// ./deskStructure.js
import { CogIcon } from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // Regular document types
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'siteSettings'
      ),
    ]);


export default myStructure;