var setSession = function (template) {
  var key = template.isInsert ? 'class:insert' : 'class:' + template.doc._id;
  Session.set(key, template.selectedRoles);
  console.log(Session.get(key));
};

Template.roles.onCreated(function () {
  //TODO(ajax) Validation for user or class. How to handle template level validation?
  this.type = Template.currentData().type;
  this.doc = Template.currentData().doc;
  this.roles = Permissions.roles;
  this.isInsert = this.doc === undefined || this.doc._id === undefined ? true : false;
  this.selectedRoles = !this.isInsert && Array.isArray(this.doc.roles) ? this.doc.roles.slice() : [];
  if (this.selectedRoles.length > 0) {
    setSession(Template.instance());
  }
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
    if (!Template.instance().isInsert && Template.instance().type === 'class') {
      var defaultRoles = Template.instance().doc.roles;
      if (defaultRoles !== undefined && defaultRoles.indexOf(role) >= 0) {
        return 'checked';
      }
    }
  }
});

Template.roles.events({
  'click .role': function (event, template) {
    var isChecked = $(event.target).is(":checked");
    var target = event.target;
    var role = $(event.target).val();

    if (isChecked) {
      template.selectedRoles.push(role);
    } else {
      template.selectedRoles = _.without(template.selectedRoles, role);
    }
    setSession(template);
  }
});

