import {DocumentIcon} from '@sanity/icons'
// import CustomInputMultiSelect from '../../src/components/CustomInputMultiSelect'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Settings',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({name: 'title', title: 'Site Title', type: 'string'}),
    defineField({name: 'tagline', title: 'Tag Line', type: 'string'}),
    defineField({name: 'url', title: 'URL', type: 'url'}),
    defineField({name: 'favicon', title: 'Favicon', type: 'image'}),
  ],
})
