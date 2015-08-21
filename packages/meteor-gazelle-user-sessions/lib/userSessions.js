UserSessions = new Mongo.Collection('userSessions');
UserSession = Astro.Class({
  name: 'UserSession',
  collection: UserSessions,
  fields: {
    ip: 'object',
    userId: 'string',
    fullUA: 'string',
    createdAt: 'date'
  },
  indexes: {
    ipUserId: {
      fields: {
        ip: 1,
        userId: 1
      },
      options: {}
    }
  },
  validators: {
    ip: [
      Validators.required(),
      Validators.object()
    ],
    userId: [
      Validators.required(),
      Validators.string()
    ],
    fullUA: [
      Validators.required(),
      Validators.string()
    ]
  }
});
