import { DocumentTextIcon } from '@sanity/icons'
import {defineType, defineField} from 'sanity'

type ImageField = {
  name: string;
  type: string;
  options: { hotspot: boolean };
  fields: typeof defineField[];
 };
 
 export default defineType({
  name: 'sectionHero',
  title: 'Section Hero',
  icon: DocumentTextIcon,
  preview: {
   select: {
     title: 'heading',
     image: 'image',
   },
   prepare({title, image}) {
     return {
       title: title || 'Untitled',
       subtitle: 'Hero',
       media: image || DocumentTextIcon,
     }
   },
  },
  type: 'object',
  fields: [
   defineField({name: 'heading', type: 'string'}),
   defineField({name: 'tagLine', type: 'string'}),
   defineField({
     name: 'image',
     type: 'image',
     options: { hotspot: true },
     fields: [
       defineField({
         name: 'alt',
         type: 'string',
         title: 'Alternative text',
       }),
     ],
   } as unknown as ImageField),
  ],
 })
 