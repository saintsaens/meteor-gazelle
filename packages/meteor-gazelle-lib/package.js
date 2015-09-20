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
    'maxharris9:classnames@0.0.1',
    'aldeed:collection2@2.5.0',
    'aldeed:simple-schema@1.3.3',
    'matb33:collection-hooks@0.8.0',
    'meteorhacks:subs-manager@1.6.2',
    'ongoworks:security@1.2.0',
    'aldeed:template-extension@3.4.3',
    'aldeed:autoform@5.5.1'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'lib/gazelle.js',
    'lib/callbacks.js'
  ]);

  api.export('Gazelle');

});

