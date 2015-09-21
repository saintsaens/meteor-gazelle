UserClasses = new Mongo.Collection('userClasses');
UserClasses.attachSchema(Gazelle.schema.userClass);

if (Meteor.isServer) {
  //UserClasses.permit(['insert', 'update', 'remove']).ifHasRole('super-user').apply();

  Meteor.publish('user-classes-admin', function () {
    if (Roles.userIsInRole(this.userId, ['super-user'])) {
      return UserClasses.find();
    }
    this.error(new Meteor.Error('invalid-roles'));
    return;
  });

  Gazelle.callbacks.add('usersAfterInsert', function (user) {
    var defaultClasses = UserClasses.find({isDefaultClass: true}, {fields: {roles: 1}});
    var roles = [];
    defaultClasses.forEach(function (defaultClass) {
      var defaultRoles = defaultClass.roles;
      if (defaultRoles !== undefined && Array.isArray(defaultRoles)) {
        roles = _.union(roles, defaultRoles);
      }
    });
    console.log("if everything worked");
    console.log(user);
    Roles.addUsersToRoles(user._id, roles);
  });
}

Meteor.methods({
  'userClasses/insert': function(doc) {
    check(doc, Gazelle.schema.userClass);
    UserClasses.insert(doc);
  },
  'userClasses/update': function(doc, docId) {
    debugger;
    check(doc, Gazelle.schema.userClass);
    UserClasses.update(docId, {$set: doc.$set});
  },
  'userClasses/delete': function(docId) {
    UserClasses.remove(docId);
  }
});
