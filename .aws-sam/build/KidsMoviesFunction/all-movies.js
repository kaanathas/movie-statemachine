"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllMoviesHandler = void 0;
exports.AllMoviesHandler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                "id": 1,
                "name": "avencers"
            },
            {
                "id": 2,
                "name": "2012"
            },
            {
                "id": 3,
                "name": "joker"
            },
        ])
    };
};
