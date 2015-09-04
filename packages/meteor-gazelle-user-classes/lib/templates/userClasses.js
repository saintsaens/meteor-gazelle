Template.userClasses.onCreated(function () {
});

Template.userClasses.onRendered(function () {
});

Template.userClasses.onDestroyed(function () {
});

Template.userClasses.helpers({
  //TODO(ajax) Create an exists helper or something along the lines for spacebars
  userClassesExist: function () {
    return UserClasses.find().count() > 0;
  }
});

Template.userClasses.events({

});

