import type {Handler, APIGatewayProxyEvent} from 'aws-lambda'
import {LambdaResponse} from 'types/aws'
import {createResponse} from 'common/create-response'

export const handler: Handler<APIGatewayProxyEvent> = async(): LambdaResponse => {
	return createResponse(200, 'hello, world')
}

