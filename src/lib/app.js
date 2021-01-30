"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lamdaHandler = void 0;
exports.lamdaHandler = async (event) => {
    const queries = JSON.stringify(event.queryStringParameters);
    return {
        statusCode: 200,
        body: `queries:${queries}`
    };
};
