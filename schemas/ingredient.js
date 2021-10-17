import {
  MdLocalGroceryStore as icon
} from 'react-icons/md'

export default {
  name: 'ingredient',
  title: 'Ingredient',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(80),
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      validation: Rule => Rule.required().min(1),
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(80),
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      quantity: 'quantity',
      unit: 'unit',
      notes: 'notes'
    },
    prepare({ title, quantity, unit, notes }) {
      return {
        title,
        subtitle: `${quantity} ${unit}`,
      }
    }
  },
}