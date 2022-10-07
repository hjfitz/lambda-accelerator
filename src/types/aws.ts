import {StatusCodes} from 'http-status-codes'

export interface ResponseBody {
    isBase64Encoded?: boolean
    statusCode?: StatusCodes
    headers?: Record<string, string>
    multiValueHeaders?: Record<string, string[]>
    body?: string
}

export type LambdaResponse = Promise<ResponseBody>
