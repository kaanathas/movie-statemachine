import{ APIGatewayProxyEvent,
    APIGatewayProxyResult,
    APIGatewayProxyCallback, 
    APIGatewayAuthorizerEvent} from "aws-lambda"



export const AgeTakeHandler= async(event:APIGatewayProxyEvent,
    callback:APIGatewayProxyCallback):Promise<APIGatewayProxyResult>=>{
        const data=JSON.parse(event.body);

        return{
            statusCode:200,
            body:data.age
        }
    
}