UserClassesController = ApplicationController.extend({
  waitOn: function () {
    Meteor.subscribe('user-classes-management');
  },
  data: function () {
    return {
      userClasses: UserClasses.find()
    }
  },
  userClasses: function () {
    this.render('userClasses');
  },
});

// TOOD(ajax) Permission check to only allow users with correct perms
Router.route('/user-classes', {
  name: 'userClasses',
  controller: UserClassesController,
});
