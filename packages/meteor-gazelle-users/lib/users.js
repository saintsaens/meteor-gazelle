// Registers
Meteor.users.after.insert(function (userId, doc) {
  Gazelle.callbacks.run('usersAfterInsert', doc);
});
