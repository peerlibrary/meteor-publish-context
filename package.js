Package.describe({
  name: 'peerlibrary:publish-context',
  summary: "Provide DDP._CurrentPublish with access to current publish context",
  version: '0.1.0',
  git: 'https://github.com/peerlibrary/meteor-publish-context.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0.3.1');

  // Core dependencies.
  api.use([
    'coffeescript',
    'ddp'
  ], 'server');

  api.addFiles([
    'server.coffee'
  ], 'server');
});
