import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'donationAmountType',
  title: 'donations',
  type: 'object',
  fields: [defineField({name: 'label', type: 'string'})],
})
