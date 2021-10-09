/* eslint-disable class-methods-use-this */
const { ClientError } = require('../../exceptions');

class ExtensionsHandler {
  onPreResponseHandler(request, h) {
    const { response } = request;

    if (response instanceof ClientError) {
      const newResponse = h.response({
        status: 'fail',
        message: response.message,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    if (response instanceof Error) {
      const newResponse = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      newResponse.code(500);
      return newResponse;
    }

    return response.continue || response;
  }
}

module.exports = ExtensionsHandler;
