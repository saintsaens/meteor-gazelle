Package.describe({
  name: 'meteor-gazelle:user-classes',
  version: '0.0.1',
  summary: 'This package provides a class based system for',
  documentation: 'README.md',
  git: 'https://github.com/meteor-gazelle/meteor-gazelle.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'meteor-gazelle:lib@0.0.1'
  ]);

  api.addFiles([
    'lib/schemas.js',
    'lib/userClasses.js',
    'lib/routes.js'
  ]);

  api.addFiles([
    'lib/callbacks.js',
    'lib/publications.js'
  ], 'server');

});

Package.onTest(function (api) {
});
