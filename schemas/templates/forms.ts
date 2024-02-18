import {ThListIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'forms',
  title: 'Forms',
  type: 'document',
  icon: ThListIcon,
  groups: [
    {name: 'edit', title: 'Edit'},
    {name: 'settings', title: 'Settings'},
  ],
  fields: [
    defineField({name: 'formName', title: 'Form Name', type: 'string'}),
    defineField({name: 'formAskBlurb', title: 'Ask Blurb', type: 'string'}),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'submitButton',
      title: 'Submit Button',
      type: 'string',
    }),
  ],
})
