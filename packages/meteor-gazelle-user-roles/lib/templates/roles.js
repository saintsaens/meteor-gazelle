Template.roles.onCreated(function () {
  this.subscribe('manage-user-roles');
  this.roles = Meteor.roles.find({});
});

Template.roles.onRendered(function () {
});

Template.roles.onDestroyed(function () {
});

Template.roles.helpers({
  roles: function() {
    return Template.instance().roles;
  }
});

Template.roles.events({

});

