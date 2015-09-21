// TODO(ajax) How to handle ranking

Gazelle.schema.userClass = new SimpleSchema({
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
  },
  roles: {
    type: [String],
    label: 'The roles that this class provides',
    optional: true
  }
});

Gazelle.schema.userClasses = new SimpleSchema({
  userClasses: {
    type: [String],
    optional: true
  }
});
