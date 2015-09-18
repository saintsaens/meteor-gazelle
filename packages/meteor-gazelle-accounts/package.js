Package.describe({
  name: 'meteor-gazelle:accounts',
  version: '0.0.1',
  summary: 'Configures meteor-useraccounts for meteor-gazelle.',
  git: 'https://github.com/meteor-gazelle/meteor-gazelle',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  var packages = [
    'meteor-gazelle:lib@0.0.1',
    'accounts-password@1.1.1',
    'useraccounts:unstyled@1.12.3',
    'useraccounts:flow-routing@1.12.3'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'lib/config.js'
  ]);

});
