import express, { Application, Request, Response } from 'express';
import config from '../config/config.js';
import httpCodes from '../enums/httpCodes.js';
import errorMiddleware from '../middleware/error.middleware.js';

const { api } = config;

export default function (app: Application) {
    // Helper to check the health of the app.
    app.all('/status', (req: Request, res: Response) => {
        res.status(httpCodes.OK).send('Ok ✔');
    });

    app.use(express.json());

    app.use(api.prefix + api.version, () => {});

    // Handle Page 404 error
    app.use((req, res, next) => {
        const err = new Error('Page not found.');

        next(err);
    });

    // Global error middleware
    app.use(errorMiddleware);
}
