import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'MenuCategory',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of category',
      type: 'image',
    }),
  ],
})
