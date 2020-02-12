'use strict';

const uuidv1 = require('uuid/v1')

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports.nuevaOrden = function(event, context, callback) {
  
  console.log('recibiendo una nueva orden');
  const body = JSON.parse(event.body);

  const orden = {
    id: uuidv1(),
    tipo: body.tipo,
    descripcion: body.descripcion,
    timestamp: new Date()
  }

  sendResponse(200, orden, callback);
}

function sendResponse(statusCode, message, callback) {
  const response = {
		statusCode: statusCode,
		body: JSON.stringify(message)
	};
	callback(null, response);
}