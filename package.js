Package.describe({
  name: 'peerlibrary:publish-context',
  summary: "Provide DDP._CurrentPublish with access to current publish context",
  version: '0.3.0',
  git: 'https://github.com/peerlibrary/meteor-publish-context.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3.4.4');

  // Core dependencies.
  api.use([
    'coffeescript',
    'ddp'
  ], 'server');

  // 3rd party dependencies.
  api.use([
    'peerlibrary:extend-publish@0.4.0'
  ], 'server');

  api.addFiles([
    'server.coffee'
  ], 'server');
});
