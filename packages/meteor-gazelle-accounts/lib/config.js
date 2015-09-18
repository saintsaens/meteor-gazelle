AccountsTemplates.configure({
  defaultLayout: 'layout',
  defaultContentRegion: 'main',
  showForgotPasswordLink: true,
  enablePasswordChange: true
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
