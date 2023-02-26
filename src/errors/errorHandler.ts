import BaseError from './BaseError';
import logger from '../loaders/logger';

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
