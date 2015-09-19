var autoFormHooks = {
  before: {
    'method-update': function(doc) {
      var id = this.docId;
      console.log("doc id " + id);
      console.log(Session.get('class:' + id));
      doc.roles = Session.get('class:' + id);
      return doc;
      //this.result(doc); (asynchronous)
    }
  }
};

Template.userClass.onCreated(function () {
  this.formType = Template.currentData().type;
  this.isEditForm = this.formType == 'edit';
  this.isEditMode = new ReactiveVar(false);
  AutoForm.addHooks(getFormId(), autoFormHooks);
});

Template.userClass.onRendered(function () {
});

Template.userClass.onDestroyed(function () {

});

var getFormId = function() {
  var formId = 'user-class-create';
  if (Template.currentData().doc != null && Template.currentData().doc.hasOwnProperty('_id')) {
    var formId = 'user-class-update-' + Template.currentData().doc._id;
  }
  return formId;
};

var toggleEditMode = function() {
  Template.instance().isEditMode.set(!Template.instance().isEditMode.get());
};

Template.userClass.helpers({
  isEditForm: function () {
    return Template.instance().isEditForm;
  },
  isEditMode: function () {
    return Template.instance().isEditMode.get();
  },
  lockCheckbox: function() {
    return Template.instance().isEditForm && !Template.instance().isEditMode.get();
  },
  formId: function () {
    return getFormId();
  },
  formSchema: function () {
    return Forms.userClass;
  },
  formType: function () {
    var type = 'method';
    if (Template.instance().isEditMode.get()) {
      type = 'method-update';
    } else if (Template.instance().isEditForm) {
      type = 'readonly';
    }
    return type;
  },
  formMethod: function () {
    var method = 'userClasses/create';
    if (Template.instance().isEditForm) {
      method = 'userClasses/update';
    }
    return method;
  },
  formDoc: function () {
    return Template.currentData().doc;
  }
});

Template.userClass.events({
  'click .user-class-edit': function (event, template) {
    toggleEditMode();
  },
  'click .user-class-update': function (event, template) {
    if (AutoForm.validateForm(getFormId())) {
      toggleEditMode();
    }
  },
  'click .user-class-delete': function (event, template) {
    event.preventDefault();
    Meteor.call('userClasses/delete', Template.currentData().doc._id);
  }
});
