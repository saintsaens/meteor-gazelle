Package.describe({
  name: 'meteor-gazelle:lib',
  version: '0.0.1',
  summary: 'Provides mission critical packages and functionality.',
  git: 'https://github.com/meteor-gazelle/meteor-gazelle',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  var packages = [
    'meteor-platform',
    'reactive-var',
    'kadira:flow-router@2.6.0',
    'kadira:blaze-layout@2.1.0',
    'maxharris9:classnames@0.0.1'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'lib/gazelle.js'
  ]);

  api.export('Gazelle');

});

