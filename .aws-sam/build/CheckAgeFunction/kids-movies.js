"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KidsMoviesHandler = void 0;
exports.KidsMoviesHandler = async (event) => {
    // const data=JSON.parse(event.body);
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                "id": 1,
                "name": "tintin"
            },
            {
                "id": 2,
                "name": "mr bean"
            },
            {
                "id": 3,
                "name": "ben 10"
            },
        ])
    };
};
