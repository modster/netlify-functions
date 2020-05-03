//~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~($)~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~//
exports.handler = function(event, context, callback) {
// your server-side functionality
callback(null, {
  statusCode: 200,
  body: JSON.stringify({
    message: `Hello world ${Math.floor(Math.random() * 10)}`
  })
});
};

//~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~($)~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~//
export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello world ${Math.floor(Math.random() * 10)}` })
  };
}

//~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~($)~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~//
exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: 'Yey!',
    });
};

//~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~($)~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~//
