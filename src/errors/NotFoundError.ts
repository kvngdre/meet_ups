import BaseError from './BaseError';
import httpCodes from '../enums/httpCodes';

class NotFoundError extends BaseError {
    constructor(description: string) {
        const httpCode = httpCodes.NOT_FOUND;
        const isOperational = true;

        super(httpCode, isOperational, description);
    }
}

export default NotFoundError;
