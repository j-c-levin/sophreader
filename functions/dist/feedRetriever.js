var request = require('superagent');
exports.handler = function (event, context, callback) {
    request.get(event.queryStringParameters)
        .end(function (err, res) {
        console.log(res);
    });
};
