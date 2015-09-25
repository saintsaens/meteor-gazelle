var groupSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'The group\'s title'
  },
  description: {
    type: String,
    label: 'The group\'s description'
  },
  roles: {
    type: [String],
    label: 'The roles in this group',
    custom: function () {
      debugger;
      return true;
    }
  }
});

var Role = function (title, description, permissions) {
  this.title = null;
  this.description = null;
  this.permissions = [];
};

Permissions = {
  schemas: {},
  roles: [],
  permissions: [],
  check: function (userId, role, permissions, callbacks) {
    check(userId, String);
    check(role, String);
    check(permissions, [String]);

    var results = Meteor.users.findOne(userId, {
      fields: {
        "permissions.$.enabledRoles": 1,
        "permissions.$.disabledRoles": 1,
        "permissions.$.enabledPermissions": 1,
        "permissions.$.disabledPermissions": 1,
        "permissions.$.groups": 1
      }
    });

    if (results === undefined) {
      Meteor.Error('not-found');
    }

    debugger;
  },
  registerRoles: function (roles) {
    check(roles)
  }
};

Permissions.schemas.group = groupSchema;

Permissions.check(userId, 'fireman', ['save-cats'], callbacks);

Permissions.registerRoles(role);

var fireman = Permissions.createRole('fireman', 'description', {
  'saves-cats': {
    title: 'Saves cats',
    description: 'By climbing trees'
  }
});

var group = Permissions.createRoleUsing('firewoman', ['save-cats'], {}).createRoleFrom()

Permissions.addAction(userId, ['save-cats']);
Permissions.removeAction(userId, ['save-cats']);
Permissions.disableAction(userId, ['fireman']);
Permissions.addRole(userId, ['fireman']);
Permissions.removeRole(userId, ['fireman']);
Permissions.disableRole(userId, ['fireman']);
Permissions.addGroup(userId, ['civic servant']);
Permissions.removeGroup(userId, ['civic servant']);

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
Permissions.getUserGroups


/**

 Action based permissons

 Code
 - Users can do a certain action
 - Roles consist of action

 User based
 - Role group consist of roles. They have titles and descriptions.
 - Users can be assigned individual actions
 -

 */
