import { Router } from 'express';
import countryRoutes from './country.routes';
import holidayRoutes from './holiday.routes';
import meetingRoutes from './meeting.routes';

const router = Router();

export default () => {
    router.use('/country', countryRoutes);
    router.use('/holiday', holidayRoutes);
    router.use('/meeting', meetingRoutes);

    return router;
};
