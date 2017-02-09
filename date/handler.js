'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current date is ${new Date().toDateString()}.`,
    }),
  };

  callback(null, response);
};
