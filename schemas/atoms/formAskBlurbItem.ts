import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'formAskBlurbItem',
  type: 'object',
  fields: [
    defineField({
      name: 'formAskBlurbItemDescription',
      title: 'Description',
      type: 'string',
    }),
    // defineField({
    //   name: 'formAskBlurbBackgroundColor',
    //   title: 'Background Color',
    //   type: 'simplerColor',
    //   options: {
    //     colorList: [
    //       {label: 'Light', value: '#ffffff'},
    //       {label: 'Dark', value: '#333333'},
    //       {label: 'Brand', value: '#ca786d'},
    //       {label: 'Accent', value: '#626754'},
    //     ],
    //   },
    // }),
  ],
})
