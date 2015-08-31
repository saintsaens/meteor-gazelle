User = Astro.Class({
  name: 'User',
  collection: Meteor.users,
  fields: {
    emails: 'array',
    services: 'object',
    createdAt: 'date'
  },
  events: {
    afterinsert: function () {
      console.log('after insert called');
      Gazelle.callbacks.run('userAfterInsert', this);
    }
  }
});
