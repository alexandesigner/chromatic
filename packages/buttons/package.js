Package.describe({
  name: 'mdg:buttons',
  version: '0.2.5',
  summary: 'button components',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'mdg:borealis@0.2.5',
    'mdg:chromatic-api@0.2.4',
    'tmeasday:check-npm-versions@0.3.1'
  ], 'client');

  api.mainModule('main.js', 'client');
});
