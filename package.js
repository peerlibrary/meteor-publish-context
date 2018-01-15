Package.describe({
  name: 'peerlibrary:publish-context',
  summary: "Provide DDP._CurrentPublish with access to current publish context",
  version: '0.6.0',
  git: 'https://github.com/peerlibrary/meteor-publish-context.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.4.4.5');

  // Core dependencies.
  api.use([
    'coffeescript@2.0.3_3',
    'ecmascript',
    'ddp'
  ], 'server');

  // 3rd party dependencies.
  api.use([
    'peerlibrary:extend-publish@0.5.0'
  ], 'server');

  api.addFiles([
    'server.coffee'
  ], 'server');
});
