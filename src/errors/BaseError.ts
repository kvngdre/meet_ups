class BaseError extends Error {
    public code;

    constructor(
        private httpCode: number,
        public isOperational: boolean,
        description: string
    ) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);

        this.code = httpCode;
        this.isOperational = isOperational;

        Error?.captureStackTrace(this, this.constructor);
    }
}

export default BaseError;
