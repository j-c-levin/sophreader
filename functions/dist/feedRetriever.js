exports.handler = async function (event, context, callback) {
    let Parser = require('rss-parser');
    let parser = new Parser();
    let feed = await parser.parseURL(event.queryStringParameters.feedUrl);
    context.succeed({
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(feed)
    });
};