import { defineField, defineType } from "sanity";

export default defineType({
    name: 'formAskBlurbType',
    type: 'object',
    fields: [
      defineField({
        name: 'formAskBlurbDescription',
        title: 'Form Ask Blurb',
        type: 'string',
      }),
      // defineField({
      //   name: 'formAskBlurbBackgroundColor',
      //   title: 'Background Color',
      //   type: 'simplerColor',
      //   options: {
      //     colorList: [
      //       { label: 'Light', value: '#ffffff' },
      //       { label: 'Dark', value: '#333333' },
      //       { label: 'Brand', value: '#ca786d' },
      //       { label: 'Accent', value: '#626754' },
      //     ],
      //   },
      // }),
    ],
  })