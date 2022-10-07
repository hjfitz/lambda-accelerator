import {StatusCodes} from 'http-status-codes'
import {createResponse} from './create-response'

export class HttpError extends Error {
	constructor(private readonly code: StatusCodes, private readonly reason?: string | object) {
		super()
	}

	public createApiResponse() {
		return createResponse(this.code, this.reason)
	}
}

export class InternalServerError extends HttpError {
	constructor(reason?: string | object) {
		super(500, reason)
	}
}

export class ForbiddenError extends HttpError {
	constructor(reason?: string | object) {
		super(403, reason)
	}
}

export class UnauthorizedError extends HttpError {
	constructor(reason?: string | object) {
		super(401, reason)
	}
}

export class NotFoundError extends HttpError {
	constructor(reason?: string | object) {
		super(404, reason)
	}
}

export class BadRequestError extends HttpError {
	constructor(reason?: string | object) {
		super(400, reason)
	}
}
