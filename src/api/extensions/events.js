const extensionsEvent = (handler) => [
  {
    type: 'onPreResponse',
    method: handler.onPreResponseHandler,
  },
];

module.exports = extensionsEvent;
