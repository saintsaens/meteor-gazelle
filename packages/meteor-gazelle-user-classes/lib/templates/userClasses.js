var userClassesSubs = new SubsManager();

Template.userClasses.onCreated(function () {
  var self = this;
  self.ready = new ReactiveVar();
  self.autorun(function () {
    var handle = userClassesSubs.subscribe('user-classes-admin');
    self.ready.set(handle.ready());
  });
});

Template.userClasses.onRendered(function () {
});

Template.userClasses.onDestroyed(function () {
});

Template.userClasses.helpers({
  userClasses: function () {
    return UserClasses.find();
  }
});

Template.userClasses.events({});

