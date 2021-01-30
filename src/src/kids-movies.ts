import{APIGatewayProxyEvent,APIGatewayProxyResult} from "aws-lambda"


export const KidsMoviesHandler=async(event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult>=>{
    // const data=JSON.parse(event.body);

    return{
        statusCode:200,
        body:JSON.stringify([
            {
            "id":1,
            "name":"tintin"
        },
        {
            "id":2,
            "name":"mr bean"
        },
        {
            "id":3,
            "name":"ben 10"
        },
    
    ])
    }

}