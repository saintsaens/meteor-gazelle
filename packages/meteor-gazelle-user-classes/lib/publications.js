Meteor.publish('user-classes-admin', function () {
  if (Roles.userIsInRole(this.userId, ['super-user'])) {
    return UserClasses.find();
  }

  this.error(new Meteor.Error('invalid-roles'));
  return;
});
