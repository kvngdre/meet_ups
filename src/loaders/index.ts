import expressLoader from "./express.loader";
import { Application } from 'express';
import logger from "./logger";

export default (app: Application) => {
    expressLoader(app);
    logger.info('Express app loaded 🚀');
}