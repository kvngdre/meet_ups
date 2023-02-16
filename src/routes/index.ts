import { Router } from 'express';
import countryRouter from './country.routes.js';
import holidayRouter from './holiday.routes.js';
import meetingRouter from './meeting.routes.js';

const router = Router();

export default () => {
    router.use('/countries', countryRouter);
    router.use('/holidays', holidayRouter);
    router.use('/meeting-time', meetingRouter);

    return router;
};
