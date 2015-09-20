UserClasses = new Mongo.Collection('userClasses');
UserClasses.attachSchema(Gazelle.schemas.userClass);

if (Meteor.isServer) {
  UserClasses.permit(['insert', 'update', 'remove']).ifHasRole('super-user').apply();

  Meteor.publish('user-classes-admin', function () {
    if (Roles.userIsInRole(this.userId, ['super-user'])) {
      return UserClasses.find();
    }
    this.error(new Meteor.Error('invalid-roles'));
    return;
  });

  Gazelle.callbacks.add('usersAfterInsert', function (user) {
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
  });
}

