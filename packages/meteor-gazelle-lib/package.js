Package.describe({
  name: 'meteor-gazelle:lib',
  version: '0.0.1',
  summary: 'meteor-gazelle internal packages.',
  documentation: 'README.md',
  git: 'https://github.com/meteor-gazelle/meteor-gazelle.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'meteor-platform',
    'aldeed:autoform@5.3.2',
    'aldeed:collection2',
    'aldeed:simple-schema',
    'iron:router',
    'accounts-password',
    'zimme:iron-router-auth',
    'reactive-var',
    'jquery',
    'maxharris9:classnames',
    'fourseven:scss',
    'accounts-ui',
    'useraccounts:core',
    'useraccounts:iron-routing',
    'jagi:astronomy',
    'jagi:astronomy-timestamp-behavior',
    'jagi:astronomy-validators',
    'jagi:astronomy-behaviors',
    'msavin:mongol',
    'alanning:roles@1.2.11',
    'matb33:collection-hooks'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'lib/gazelle.js',
    'lib/callbacks.js',
    'lib/collections.js'
  ], ['client', 'server']);

  api.export([
    'Gazelle'
  ]);
});

Package.onTest(function (api) {
});
