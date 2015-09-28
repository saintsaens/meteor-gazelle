//TODO Add indexes
Gazelle.schema.userClass = new SimpleSchema({
  title: {
    type: String,
    label: 'The class\'s title'
  },
  shortTitle: {
    type: String,
    label: 'The class\'s title short title'
  },
  description: {
    type: String,
    label: 'The class\'s description'
  },
  roles: {
    type: [String],
    label: 'The roles in this class'
  },
  isSecondary: {
    type: Boolean,
    label: 'This is a secondary class'
  },
  isDefault: {
    type: Boolean,
    label: 'This is a default class'
  },
  isVisibleOnStaffPage: {
    type: Boolean,
    label: 'Users with this class are listed on the staff page'
  }
});

Gazelle.schema.userPermissions = new SimpleSchema({
  permissions: {
    type: new SimpleSchema({
      enabledPermissions: {
        type: [String],
        label: 'Manually enabled permissions',
        optional: true
      },
      disabledPermissions: {
        type: [String],
        label: 'Manually disabled permissions',
        optional: true
      },
      roles: {
        type: [String],
        label: 'The user\'s roles',
        optional: true
      },
      classs: {
        type: [String],
        label: 'The user\'s classes',
        optional: true
      }
    }),
    optional: true
  }
});