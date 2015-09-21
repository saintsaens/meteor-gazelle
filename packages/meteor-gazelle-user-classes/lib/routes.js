FlowRouter.route('/user-classes/admin', {
  name: 'user-classes/admin',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {
      header: 'header',
      main: 'userClasses'
    });
  }
});
