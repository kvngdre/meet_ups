import errorHandler from '../errors/errorHandler';
import { Request, Response, NextFunction } from 'express';
import httpCodes from '../enums/httpCodes';
import BaseError from '../errors/BaseError';

export default (
    err: Error & BaseError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    errorHandler.handlerError(err);
    
    if (errorHandler.isTrustedError(err))
        return res.status(err.code).json(new ErrorResponse(err.message));

    return res.status(httpCodes.INTERNAL_SERVER).json(new ErrorResponse());
};

class ErrorResponse {
    private success;
    private errors;

    constructor(description: string = 'Something went wrong.') {
        this.success = false;
        this.errors = {
            message: description,
        };
    }
}
