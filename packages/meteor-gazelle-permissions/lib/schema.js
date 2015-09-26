//TODO Add indexes

groupSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'The group\'s title'
  },
  description: {
    type: String,
    label: 'The group\'s description'
  },
  roles: {
    type: [String],
    label: 'The roles in this group'
  }
});

permissionsSchema = new SimpleSchema({
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
  groups: {
    type: [String],
    label: 'The user\'s groups',
    optional: true
  }
});

userSchema = new SimpleSchema({
  permissions: {
    type: permissionsSchema,
    optional: true
  }
});
