const request = require('superagent');

exports.handler = function (event, context, callback) {
    request.get(event.queryStringParameters)
        .end((err, res) => {
            console.log(res);
        });
};
