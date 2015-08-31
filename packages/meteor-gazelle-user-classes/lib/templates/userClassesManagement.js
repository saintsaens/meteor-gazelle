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

