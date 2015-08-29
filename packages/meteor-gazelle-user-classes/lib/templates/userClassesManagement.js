Template.userClassesManagement.onCreated(function () {
});

Template.userClassesManagement.onRendered(function () {
});

Template.userClassesManagement.onDestroyed(function () {
});

Template.userClassesManagement.helpers({
  //TODO(ajax) Create an exists helper or something along the lines for spacebars
  userClassesExist: function () {
    return UserClasses.find().count() > 0;
  },
  userClassCreateForm: Forms.userClass
});

Template.userClassesManagement.events({

});

var hooksObject = {
  before: {
    formType: function (doc) {
      doc.foo = 'bar';
      return doc;
    }
  }
};

Template.userClassManage.onCreated(function () {
  this.isEditing = new ReactiveVar(false);
  this.autoFormType = new ReactiveVar("readonly");
  this.autoFormId =  "user-class-manage-" + this.data._id;
});

Template.userClassManage.onRendered(function () {
});

Template.userClassManage.onDestroyed(function () {
});

Template.userClassManage.helpers({
  autoFormId: function() {
    return Template.instance().autoFormId
  },
  autoFormType: function() {
    return Template.instance().autoFormType.get();
  },
  isEditing: function() {
    return Template.instance().isEditing.get();
  },
  userClassForm: Forms.userClass
});

Template.userClassManage.events({
  'click .user-class-edit': function(event, template) {
    template.isEditing.set(true);
    template.autoFormType.set("method-update");
  },
  'click .user-class-save': function(event, template) {
    template.isEditing.set(false);
    template.autoFormType.set("readonly");
  },
  'click .user-class-delete': function(event, template) {
    Meteor.call('userClasses/delete', this._id);
  }
});
