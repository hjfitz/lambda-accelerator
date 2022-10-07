import {getReasonPhrase, StatusCodes} from 'http-status-codes'
import {ResponseBody} from '../types/aws'
import {HttpError} from './errors'

export function createResponse(statusCode: StatusCodes, body?: string | object): ResponseBody {
	if (!body) {
		return {
			statusCode,
			body: getReasonPhrase(statusCode)
		}
	}

	if (typeof body === 'string') {
		return {statusCode, body}
	}
	if (typeof body === 'object') {
		return {
			statusCode,
			body: JSON.stringify(body, (_, val) => val === undefined ? null : val)
		}
	}

	throw new HttpError(StatusCodes.INTERNAL_SERVER_ERROR, 'Invalid response body supplied')
}
