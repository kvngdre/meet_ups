import BaseError from './BaseError';
import httpCodes from '../enums/httpCodes';

class ValidationError extends BaseError {
    constructor(description: string) {
        const httpCode = httpCodes.BAD_REQUEST;
        const isOperational = true;

        super(httpCode, isOperational, description);
    }
}

export default ValidationError;
