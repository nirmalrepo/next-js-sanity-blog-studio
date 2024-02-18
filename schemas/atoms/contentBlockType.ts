import {defineField, defineType} from 'sanity'
type ContentField = {
  name: string
  title: string
  type: string
  of: {type: string}[]
}
export default defineType({
  name: 'contentBlockType',
  title: 'Content',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    } as ContentField),
    defineField({
      name: 'readmore',
      title: 'Read more / Show Less',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
