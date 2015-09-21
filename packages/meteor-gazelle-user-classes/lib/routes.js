FlowRouter.route('/admin/user-classes', {
  name: 'admin/user-classes',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, queryParams) {
    BlazeLayout.render('layout', {
      header: 'header',
      main: 'userClasses'
    });
  }
});
