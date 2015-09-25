Package.describe({
  name: 'meteor-gazelle:permissions',
  version: '0.0.1',
  summary: 'Provides group based permissions.',
  git: 'https://github.com/meteor-gazelle/meteor-gazelle',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  var packages = [
    'meteor-gazelle:lib',
    'meteor-gazelle:user-roles@0.0.1'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'lib/permissions.js'
  ]);

});

