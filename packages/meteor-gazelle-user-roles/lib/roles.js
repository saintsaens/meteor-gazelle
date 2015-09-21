Gazelle.roleRegistry = {
  roles: [],

  register: function (role, description) {
    //TODO(ajax) Add Validation
    Gazelle.roleRegistry.roles.push({role: role, description: description});
  }
};

Gazelle.roleRegistry.register("role a", "desc a");
Gazelle.roleRegistry.register("role b", "desc b");
Gazelle.roleRegistry.register("role c", "desc c");
Gazelle.roleRegistry.register("role d", "desc d");

if (Meteor.isServer) {
  Meteor.publish('user-roles-admin', function () {
    //TODO(ajax) Check that user has the role management role.
    return Meteor.roles.find({})
  });

  Meteor.users.after.insert(function (userId, doc) {
    var superUserRole = 'super-user';
    var role = Meteor.roles.findOne({name: superUserRole});
    if (!role) {
      Roles.addUsersToRoles(doc._id, 'super-user');
    }
  });
}
