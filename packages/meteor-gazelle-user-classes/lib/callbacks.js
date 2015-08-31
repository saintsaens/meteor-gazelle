var setDefaultUserClass = function(user) {
  var foundUser = Meteor.users.findOne({});
  if (!foundUser) {
    Roles.addUsersToRoles(user._id, 'super-user');
    console.log('user created with super - user permission');
  }
};

Gazelle.callbacks.add('userAfterInsert', setDefaultUserClass);
