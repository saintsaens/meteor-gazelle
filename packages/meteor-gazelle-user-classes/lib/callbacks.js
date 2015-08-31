var setDefaultUserClass = function(user) {
	var superUserRole = 'super-user';
  var role = Meteor.roles.findOne({name: superUserRole});
  if (!role) {
    Roles.addUsersToRoles(user._id, 'super-user');
    console.log('user created with super - user permission');
  }
};

Gazelle.callbacks.add('usersAfterInsert', setDefaultUserClass);
