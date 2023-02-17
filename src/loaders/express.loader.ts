import config from '../config/config';
import cors from 'cors';
import errorMiddleware from '../middleware/error.middleware';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import httpCodes from '../enums/httpCodes';
import NotFoundError from '../errors/NotFoundError';
import routes from '../routes';

const { api } = config;

export default function (app: Application) {
    // Helper to check the health of the app.
    app.all('/status', (req: Request, res: Response) => {
        res.status(httpCodes.OK).send('Ok ✔');
    });

    app.use(helmet());

    app.use(cors());

    app.use(express.json());

    app.use(api.prefix + api.version, routes());

    // Handle Page 404 error
    app.use((req, res, next) => {
        const err = new NotFoundError('Resource not found.');
        next(err);
    });

    // Global error middleware
    app.use(errorMiddleware);
}
