import { Application, Request, Response } from 'express';
import config from '../config/config.js';

const { api } = config;

export default function (app: Application) {
    // To check the he
    app.all('/status', (req: Request, res: Response) => {
        res.status(200).send('Ok ✔');
    });
}
