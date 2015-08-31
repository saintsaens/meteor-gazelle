User = Astro.Class({
  name: 'User',
  collection: Meteor.users,
  fields: {
    emails: 'array',
    services: 'object',
    createdAt: 'date'
  }
});

Meteor.users.after.insert(function (userId, doc) {
  console.log('hook hit');
  Gazelle.callbacks.run('usersAfterInsert', doc);
});