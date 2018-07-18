import { get } from 'superagent';

exports.handler = function (event, context) {
    get(event.queryStringParams.feedUrl).
    context.succeed('hello world');
};
