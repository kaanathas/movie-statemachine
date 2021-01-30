
const axios = require('axios').default;

import{ APIGatewayProxyEvent,APIGatewayProxyResult} from "aws-lambda"

export const returnMoviesHandler=async(event:APIGatewayProxyEvent):Promise<APIGatewayProxyResult> =>{
    const data=JSON.parse(event.body);


    // we have to change the path
    axios.post('/user',{
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response:any) {
        
    return{
        statusCode:200,
        body:response
    }
      })
      .catch(function (error:any) {
       
    return{
        statusCode:403,
        body:error
    }
      });

   return



}
