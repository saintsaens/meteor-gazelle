var setDefaultClasses = function (user) {
  var defaultClasses = UserClasses.find({isDefaultClass: true}, {fields: {roles: 1}});
  console.log("default classes");
  console.log(defaultClasses);
  var roles = [];
  defaultClasses.forEach(function (doc) {
    var defaultRoles = doc.get('roles');
    console.log(defaultRoles);
    if (Array.isArray(defaultRoles)) {
      roles = _.union(roles, defaultRoles);
    }
  });
  console.log(roles);
};

Gazelle.callbacks.add('usersAfterInsert', setDefaultClasses);
