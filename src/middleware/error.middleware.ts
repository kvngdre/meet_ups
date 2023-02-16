import errorHandler from '../errors/errorHandler';
import { Request, Response, NextFunction } from 'express';
import httpCodes from '../enums/httpCodes';

export default (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    errorHandler.handlerError(err);

    if (err instanceof SyntaxError && 'body' in err)
        return res
            .status(httpCodes.BAD_REQUEST)
            .json(new ErrorResponse(err.message));

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
