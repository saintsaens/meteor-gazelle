Meteor.users.attachSchema(Gazelle.schema.user);

Permissions = {
  permissions: [],
  roles: {},
  check: function (userId, role, permissions, callbacks) {
    check(userId, String);
    check(role, String);
    check(permissions, [String]);

    var results = Meteor.users.findOne(userId, {
      fields: {
        permissions: 1
      }
    });

    if (results === undefined) {
      throw new Meteor.Error('User not found');
    }

    debugger;
  },
  registerRoles: function (roles) {
    var registeredRoles = _.intersection(_.keys(this.roles), _.keys(roles));
    if (registeredRoles.length > 0) {
      throw new Meteor.Error('role-exists', 'One or more of these roles have already been registered', registeredRoles)
    }
    for (role in roles) {
      // TODO Improve validation
      // TODO Add titles and descriptions to a permission
      check(role, String);
      check(roles[role], {
        description: String,
        permissions: [String]
      });

      // TODO Change this so permissions between roles don't need to be unique
      var registeredPermission = _.intersection(this.permissions, roles[role].permissions);
      if (registeredPermission.length > 0) {
        throw new Meteor.Error('permission-exists', 'One or more of these permissions already exist in a registered role', registeredPermission)
      }

      this.roles[role] = roles[role];
      this.permissions.push(roles[role].permissions);
    }
  },
  addRoles: function (userId, roles) {
    check(userId, String);
    check(roles, [String]);
    Meteor.users.update({_id: userId}, {$push: {'permissions.$.roles': roles}});
  },
  removeRoles: function (userId, roles) {
    check(userId, String);
    check(roles, [String]);
    Meteor.users.update({_id: userId}, {$pull: {'permissions.$.roles': roles}});
  },
  isInRoles: function (userId, roles) {
    check(userId, String);
    check(roles, [String]);
  },
  addEnabledPermissions: function (userId, permissions) {
    check(userId, String);
    check(permissions, [String]);
  },
  removeEnabledPermissions: function (userId, permissions) {
    check(userId, String);
    check(permissions, [String]);
  },
  hasEnabledPermissions: function (userId, permissions) {
    check(userId, String);
    check(permissions, [String]);
  },
  addDisabledPermissions: function (userId, permissions) {
    check(userId, String);
    check(permissions, [String]);
  },
  removeDisabledPermissions: function (userId, permissions) {
    check(userId, String);
    check(permissions, [String]);
  },
  hasDisabledPermissions: function (userId, permissions) {
    check(userId, String);
    check(permissions, [String]);
  },
  addClasss: function (userId, classIds) {
    check(userId, String);
    check(permissions, [String]);
  },
  removeClasss: function (userId, classIds) {
    check(userId, String);
    check(permissions, [String]);
  },
  isInClasss: function (userId, classIds) {
    check(userId, String);
    check(permissions, [String]);
  },
  createClass: function(classObj) {

  },
  updateClass: function(classId, classObj) {

  },
  removeClass: function(classId) {

  }
};


/*
 Permissions.schemas.class = classSchema;

 Permissions.check(userId, 'fireman', ['save-cats'], callbacks);

 Permissions.registerRoles(role);

 var fireman = Permissions.createRole('fireman', 'description', {
 'saves-cats': {
 title: 'Saves cats',
 description: 'By climbing trees'
 }
 });

 var class = Permissions.createRoleUsing('firewoman', ['save-cats'], {}).createRoleFrom()

 Permissions.addAction(userId, ['save-cats']);
 Permissions.removeAction(userId, ['save-cats']);
 Permissions.disableAction(userId, ['fireman']);
 Permissions.addRole(userId, ['fireman']);
 Permissions.removeRole(userId, ['fireman']);
 Permissions.disableRole(userId, ['fireman']);
 Permissions.addClass(userId, ['civic servant']);
 Permissions.removeClass(userId, ['civic servant']);

 Permissions.actions
 Permissions.roles
 Permissions.getAction('saves-cats')
 Permissions.getAction('saves-cats').title
 Permissions.getAction('saves-cats').description
 Permissions.getRole('saves-cats')
 Permissions.getRole('saves-cats').title
 Permissions.getRole('saves-cats').description
 Permissions.getRole('saves-cats').actions


 Permissions.getUserActions
 Permissions.getUserRoles
 Permissions.getUserClasss


 /**

 Action based permissons

 Code
 - Users can do a certain action
 - Roles consist of action

 User based
 - Role class consist of roles. They have titles and descriptions.
 - Users can be assigned individual actions
 -

 */
