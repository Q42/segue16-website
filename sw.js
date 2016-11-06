
importScripts('/sw-toolbox.js');

const config = {};

config.filesToCache = [
  './',
  '/fonts/IntroBlackCapsRegular.otf',
  '/fonts/IntroBookCapsRegular.otf',
];

toolbox.options.debug = true;
toolbox.router.default = toolbox.networkOnly;
toolbox.router.get('/(.*)', toolbox.fastest);
toolbox.router.get('/(.*)', toolbox.cacheFirst, {origin: 'https://storage.googleapis.com'});
toolbox.router.get('/(.*)', toolbox.cacheFirst, {origin: 'https://cdn.ampproject.org'});

toolbox.precache(config.filesToCache);
