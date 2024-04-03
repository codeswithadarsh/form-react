export const questions = [
  {
    section: 1,
    items: [
      {
        label: 'Name',
        type: 'text',
        value: 'your name'
      },
      {
        label: 'Phone Number',
        type: 'text',
        value: 'your phone number'
      }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'Email Address',
        type: 'text',
        value: 'street'
      },
      {
        label: 'City',
        type: 'text',
        value: 'city'
      },
      {
        label: 'State',
        type: 'select',
        value: 'state',
        options: [ 'Uttar Pradesh', 'Bihar']
      }
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'If you are ready to submit please press `Submit`',
        type: 'information'
      }
    ]
  }
]
