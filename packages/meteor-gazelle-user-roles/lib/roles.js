Roles.isValidRole = function(roles) {
  if (roles instanceof String) {
    roles = [roles];
  }
  console.log(Roles.getAllRoles());
  console.log(Meteor.roles);
};
