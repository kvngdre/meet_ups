import BaseError from './BaseError.js';
import logger from '../loaders/logger.js';

class ErrorHandler {
    public handlerError(err: Error): void {
        if (this.isTrustedError(err)) logger.error(err.message, err.stack);
        else logger.fatal(err.message, err.stack);
    }

    public isTrustedError(err: Error): boolean {
        if (err instanceof BaseError) return err.isOperational;

        return false;
    }
}

export default new ErrorHandler();
