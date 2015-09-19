Package.describe({
  name: 'meteor-gazelle:user-roles',
  version: '0.0.1',
  summary: 'User Roles',
  documentation: 'README.md',
  git: 'https://github.com/meteor-gazelle/meteor-gazelle.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'meteor-gazelle:lib@0.0.1',
    'alanning:roles@1.2.12'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'lib/roles.js'
  ]);

  api.addFiles([
    'lib/templates/roles.html',
    'lib/templates/roles.js'
  ], 'client');

  api.addFiles([
    'lib/callbacks.js',
    'lib/publications.js'
  ], 'server');

});

Package.onTest(function (api) {
});
