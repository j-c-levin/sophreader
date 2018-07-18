"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var superagent_1 = require("superagent");
exports.handler = function (event, context) {
    superagent_1.get(event.queryStringParams.feedUrl).
        context.succeed('hello world');
};
