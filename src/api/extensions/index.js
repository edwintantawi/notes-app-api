const extensionsEvent = require('./events');
const ExtensionsHandler = require('./handler');

module.exports = {
  name: 'extensions',
  version: '1.0.0',
  register: async (server) => {
    const extensionsHandler = new ExtensionsHandler();
    server.ext(extensionsEvent(extensionsHandler));
  },
};
