import { ParamWithId } from '../interfaces/IParamsWithId';
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import ValidationError from '../errors/ValidationError';

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        req.params = ParamWithId.parse(req.params);
        next();
    } catch (exception: any) {
        if (exception instanceof ZodError)
            throw new ValidationError(exception.issues[0].message);

        next(exception);
    }
};
