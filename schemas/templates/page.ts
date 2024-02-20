import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [{name: 'pageBuilder', title: 'Page Builder'}],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Sections',
      group: 'pageBuilder',
      of: [
        defineArrayMember({
          name: 'sectionHero',
          type: 'sectionHero',
        }),
        defineArrayMember({
          name: 'sectionIntroduction',
          type: 'sectionIntroduction',
        }),
        defineArrayMember({
          name: 'sectionTextImage',
          type: 'sectionTextImage',
        }),
        defineArrayMember({
          name: 'sectionContent',
          type: 'sectionContent',
        }),
        defineArrayMember({
          name: 'sectionForm',
          type: 'sectionForm',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
  },
})
