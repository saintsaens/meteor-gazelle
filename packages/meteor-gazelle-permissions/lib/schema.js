//TODO Add indexes
Gazelle.schema.userClass = new SimpleSchema({
  title: {
    type: String,
    label: 'The class\'s title'
  },
  description: {
    type: String,
    label: 'The class\'s description'
  },
  roles: {
    type: [String],
    label: 'The roles in this class'
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
