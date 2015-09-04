Template.userClass.onCreated(function () {
  this.isUpdateForm = this.data.hasOwnProperty('_id') ? true : false;
  this.formId = this.isUpdateForm ? 'user-class-update-' + this.data._id : 'user-class-create';
  this.isLocked = new ReactiveVar(this.isUpdateForm);
  this.formType = new ReactiveVar("method");
});

Template.userClass.onRendered(function () {

});

Template.userClass.onDestroyed(function () {

});

var formSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'The user class title'
  },
  shortTitle: {
    type: String,
    label: 'The shortened title of the user class.'
  },
  isDefault: {
    type: Boolean,
    label: 'Is this a default class that new user\'s get?',
    defaultValue: false
  }
});

Template.userClass.helpers({
  isUpdateForm: function () {
    return Template.instance().isUpdateForm;
  },
  isLocked: function() {
    return Template.instance().isLocked;
  },
  formAttributes: function () {
    return {
      id: Template.instance().formId,
      doc: Template.instance().isUpdateForm ? this : null,
      //type: Template.instance().isEditing ?,
      schema: formSchema
    };
  }
});

Template.userClass.events({
  'click .user-class-edit': function (event, template) {
    event.preventDefault();
    if (template.isEditing.get()) {
      template.isEditing.set(false)
    } else {
      template.isEditing.set(true)
    }
  }
});

