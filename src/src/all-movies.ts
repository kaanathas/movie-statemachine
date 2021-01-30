import{
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda"

export const AllMoviesHandler=async(
    event:APIGatewayProxyEvent
):Promise<APIGatewayProxyResult>=>{
    return{
        statusCode:200,
        body:JSON.stringify([
            {
            "id":1,
            "name":"avencers"
        },
        {
            "id":2,
            "name":"2012"
        },
        {
            "id":3,
            "name":"joker"
        },
    
    ])
    }
}