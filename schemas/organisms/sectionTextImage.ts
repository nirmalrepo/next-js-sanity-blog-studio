import {DocumentTextIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

type ImageField = {
  name: string
  type: string
  options: {hotspot: boolean}
  fields: (typeof defineField)[]
}

export default defineType({
  name: 'sectionTextImage',
  title: 'Section Text Image',
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Details',
        media: image || DocumentTextIcon,
      }
    },
  },
  type: 'object',
  fields: [
    defineField({name: 'heading', type: 'string'}),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'contentBlockType',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
        defineField({
          name: 'alignment',
          title: 'Alignment',
          type: 'string',
          options: {
            list: [
              {title: 'Left', value: 'left'},
              {title: 'Right', value: 'right'},
            ],
            layout: 'radio', // This will display the options as radio buttons
          },
          description: 'Choose the alignment for this item.',
        }),
      ],
    } as unknown as ImageField),
  ],
})
