Meteor.publish('user-roles-admin', function () {
  //TODO(ajax) Check that user has the role management role.
  return Meteor.roles.find({})
});
