Template.roles.onCreated(function () {
  this.type = Template.currentData().type;
  this.doc = Template.currentData().doc;
  this.roles = Gazelle.roleRegistry.roles;
});

Template.roles.onRendered(function () {
});

Template.roles.onDestroyed(function () {
});

Template.roles.helpers({
  roles: function () {
    return Template.instance().roles;
  }
});

Template.roles.events({
  'click .role': function (event, template) {
    var isChecked = $(event.target).is(":checked");
    console.log(isChecked);
  }
});

