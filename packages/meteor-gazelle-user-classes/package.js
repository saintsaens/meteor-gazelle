Package.describe({
  name: 'meteor-gazelle:user-classes',
  version: '0.0.1',
  summary: 'User classes',
  documentation: 'README.md',
  git: 'https://github.com/meteor-gazelle/meteor-gazelle.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'meteor-gazelle:lib',
    'meteor-gazelle:users'
  ]);

  api.addFiles([
    'lib/forms.js',
    'lib/model.js',
    'lib/routes.js'
  ]);

  api.addFiles([
    'lib/templates/userClassesManagement.html',
    'lib/templates/userClassesManagement.js',
    'lib/templates/userClassManage.html',
    'lib/templates/userClassManage.js'
  ], 'client');

  api.addFiles([
    'lib/callback.js',
    'lib/publications.js'
  ], 'server');

});

Package.onTest(function (api) {
});
