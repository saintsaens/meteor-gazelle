var setFormTypeAndMethod = function(template) {
  var meteorMethod = "userClasses/insert";
  var formType = "method";
  if (template.isLocked.get()) {
    formType = "readonly";
  } else if (template.isUpdateForm) {
    formType = "method-update";
    meteorMethod = "userClasses/update";
  }
  template.formType = new ReactiveVar(formType);
  template.meteorMethod = new ReactiveVar(meteorMethod);
};

Template.userClass.onCreated(function () {
  this.isUpdateForm = this.data.hasOwnProperty('_id') ? true : false;
  this.formId = this.isUpdateForm ? 'user-class-update-' + this.data._id : 'user-class-create';
  this.isLocked = new ReactiveVar(this.isUpdateForm);
  setFormTypeAndMethod(this);
});

Template.userClass.onRendered(function () {

});

Template.userClass.onDestroyed(function () {

});

Template.userClass.helpers({
  isUpdateForm: function () {
    return Template.instance().isUpdateForm;
  },
  isLocked: function() {
    return Template.instance().isLocked.get();
  },
  formAttributes: function () {
    return {
      id: Template.instance().formId,
      doc: Template.instance().isUpdateForm ? this : null,
      type: Template.instance().formType.get(),
      meteormethod: Template.instance().meteorMethod.get(),
      schema: Forms.userClass
    };
  }
});

Template.userClass.events({
  'click .user-class-edit': function (event, template) {
    event.preventDefault();
    if (template.isLocked().get()) {
      template.isLocked.set(false)
    } else {
      template.isLocked.set(true)
    }
  }
});

