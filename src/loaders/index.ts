import expressLoader from "./express.loader.js";
import { Application } from 'express';
import logger from "./logger.js";

export default (app: Application) => {
    expressLoader(app);
    logger.info('Express app loaded 🚀');
}