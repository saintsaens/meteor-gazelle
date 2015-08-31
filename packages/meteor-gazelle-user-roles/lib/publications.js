Meteor.publish('manage-user-roles', function () {
  //TODO(ajax) Check that user has the role management role.
  return Meteor.roles.find({})
});
