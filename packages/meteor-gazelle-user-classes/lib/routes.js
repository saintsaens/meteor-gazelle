FlowRouter.route('/user-classes/admin', {
  name: 'user-classes/admin',
  triggersEnter: [function (context, redirect) {
    if (!Roles.userIsInRole(Meteor.userId(), ['super-user'])) {
      FlowRouter.go(FlowRouter.path('/'));
    }
  }],
  action: function(params, queryParams) {
    console.log("user classes admin");
  }
});
