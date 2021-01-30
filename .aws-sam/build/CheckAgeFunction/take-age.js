"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgeTakeHandler = void 0;
exports.AgeTakeHandler = async (event, callback) => {
    const data = JSON.parse(event.body);
    return {
        statusCode: 200,
        body: data.age
    };
};
