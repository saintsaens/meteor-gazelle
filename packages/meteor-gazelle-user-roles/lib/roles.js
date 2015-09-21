Meteor.users.attachSchema(Gazelle.schema.userRoles);

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

Roles.userRoleIsDisabled = function (user, roles) {
  var userId = Util.getId(user);
  var result = null;
  var isDisabledRole = false;
  if (userId) {
    result = Meteor.users.findOne({_id: userId}, {fields: {disabledRoles: 1}});
    isDisabledRole = Array.isArray(result.disabledRoles) && _.intersection(result.disabledRoles, roles).length > 0
  }

  return isDisabledRole;
};

var userIsInRoleOriginal = Roles.userIsInRole;
Roles.userIsInRole = function (user, roles, group) {
  var userId = Util.getId(user);
  var result = null;
  var isInRole = false;

  if (userId) {
    if (!isDisabledRole){
      isInRole = userIsInRoleOriginal.apply(userIsInRoleOriginal, [user, roles, group]);
    }
  }
  return isInRole;
};


if (Meteor.isServer) {
  Meteor.publish(null, function () {
    return Meteor.users.find({_id: this.userId}, {fields: {disabledRoles: 1}});
  });

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
