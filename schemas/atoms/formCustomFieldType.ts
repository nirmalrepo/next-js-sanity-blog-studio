import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'formCustomFieldType',
  title: 'Custom Field',
  type: 'object',
  fields: [
    defineField({
      name: 'fieldName',
      title: 'Field Name',
      type: 'string',
    }),
    defineField({
      name: 'fieldType',
      title: 'Field Type',
      type: 'string',
      options: {
        list: ['string', 'number', 'boolean', 'date'],
      },
    }),
    defineField({
      name: 'fieldValueString',
      title: 'Field Value',
      type: 'string',
      hidden: ({ parent }) => parent?.fieldType !== 'string',
    }),
    defineField({
      name: 'fieldValueNumber',
      title: 'Field Value',
      type: 'number',
      hidden: ({ parent }) => parent?.fieldType !== 'number',
    }),
    defineField({
      name: 'fieldValueBoolean',
      title: 'Field Value',
      type: 'boolean',
      hidden: ({ parent }) => parent?.fieldType !== 'boolean',
    }),
    defineField({
      name: 'fieldValueDate',
      title: 'Field Value',
      type: 'date',
      hidden: ({ parent }) => parent?.fieldType !== 'date',
    }),
  ],
})
