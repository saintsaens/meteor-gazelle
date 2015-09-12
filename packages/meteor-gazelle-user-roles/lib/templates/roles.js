Template.roles.onCreated(function () {
  //TODO(ajax) Validation for user or class. How to handle template level validation?
  this.type = Template.currentData().type;
  this.doc = Template.currentData().doc;
  this.roles = Gazelle.roleRegistry.roles;
  this.isInsert = this.doc !== undefined && this.doc._id === undefined;
  this.selectedRoles = this.doc !== undefined && this.doc.roles;
});

Template.roles.onRendered(function () {
});

Template.roles.onDestroyed(function () {

});

Template.roles.helpers({
  roles: function () {
    return Template.instance().roles;
  },
  isChecked: function (role) {
    if (Template.instance().isInsert && Template.instance().type === 'class') {
      var defaultRoles = Template.instance().doc.roles;
      if (defaultRoles.indexOf(role) >= 0) {
        return 'checked';
      }
    }
  }
});

Template.roles.events({
  'click .role': function (event, template) {
    var isChecked = $(event.target).is(":checked");
    var role = $(event.target).val();
    if (isChecked) {
      template.selectedRoles.push(role);
    } else {
      template.selectedRoles = _.without(template.selectedRoles, role);
    }
    console.log(template.selectedRoles);
  }
});

