Forms = {};

Forms.userClass = new SimpleSchema({
  title: {
    type: String,
    label: 'The class title'
  },
  shortTitle: {
    type: String,
    label: 'The short title'
  },
  description: {
    type: String,
    label: 'The class description'
  },
  isDefault: {
    type: Boolean,
    label: 'This is  a default class',
    defaultValue: false
  },
  isSecondary: {
    type: Boolean,
    label: 'This is a secondary class',
    defaultValue: false
  },
  isStaff: {
    type: Boolean,
    label: 'This class is visible on the staff page',
    defaultValue: false
  }
});
