Forms = {};

Forms.userClass = new SimpleSchema({
  title: {
    type: String,
    label: 'The user class title'
  },
  shortTitle: {
    type: String,
    label: 'The shortened title of the user class.'
  },
  isDefault: {
    type: Boolean,
    label: 'Is this a default class that new user\'s get?',
    defaultValue: false
  }
});
