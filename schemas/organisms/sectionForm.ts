import {ThListIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

type CustomFieldsField = {
  name: string
  title: string
  type: string
  of: {type: string; name: string}[]
  hidden: (parent: any) => boolean
}

export default defineType({
  name: 'sectionForm',
  type: 'object',
  icon: ThListIcon,
  preview: {
    select: {
      title: 'formName',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Form',
        subtitle: 'Form',
        media: image || ThListIcon,
      }
    },
  },
  fields: [
    defineField({
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      description: 'Select form type',
      options: {
        list: ['petition', 'donation', 'contact'],
      },
    }),
    defineField({
      name: 'formName',
      title: 'Name',
      type: 'string',
    }),

    defineField({
      name: 'formAskBlurb',
      title: 'Ask Blurb',
      type: 'formAskBlurbType',
    }),
    defineField({
      name: 'formDescription',
      title: 'Description',
      type: 'contentBlockType',
    }),
    defineField({
      name: 'fromButtonName',
      title: 'Custom Button Name',
      type: 'string',
    }),
    defineField({
      name: 'hasCustomFields',
      title: 'Do you have custom fields',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'customFields',
      title: 'Custom Fields',
      type: 'array',
      of: [{type: 'formCustomFieldType', name: 'formCustomFieldType'}],
      hidden: ({parent}) => !parent.hasCustomFields,
    } as CustomFieldsField),
  ],
})
