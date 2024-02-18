import { DocumentTextIcon } from '@sanity/icons'
import { defineType, defineField} from 'sanity'

export default defineType({
  name: 'sectionContent',
  title: 'Section Content',
  type: 'object',
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Content',
        subtitle: 'Content',
        media: image || DocumentTextIcon,
      }
    },
  },
  fields: [
    // defineField({
    //     name: 'content',
    //     title: 'Content',
    //     type: 'array',
    //     of: [{type: 'block'}],
    //   }),
    //   defineField({
    //     name: 'readmore', 
    //     title: 'Read more / Show Less',
    //     type: 'boolean',
    //     initialValue: true
    //   }),
      defineField({
        name: 'content',
        title: 'Content',
        type: 'contentBlockType',
      })
  ],
})
