Package.describe({
  name: 'meteor-gazelle:user-roles',
  version: '0.0.1',
  summary: 'User Roles',
  documentation: 'README.md',
  git: 'https://github.com/meteor-gazelle/meteor-gazelle.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'meteor-gazelle:lib'
  ]);

  api.addFiles([
    'lib/roleRegistry.js'
  ]);

  api.addFiles([
    'lib/templates/roles.html',
    'lib/templates/roles.js'
  ], 'client');

  api.addFiles([
 //   'lib/registered-roles.js',
    'lib/callbacks.js',
    'lib/publications.js',
  ], 'server');

  //api.export('RegisteredRoles', 'server');

});

Package.onTest(function (api) {
});
