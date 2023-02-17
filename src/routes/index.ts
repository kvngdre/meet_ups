import { Router } from 'express';
import countryRoutes from './country.routes';
import holidayRoutes from './holiday.routes';
import meetingRoutes from './meeting.routes';

const router = Router();

export default () => {
    router.use('/country', countryRoutes);
    router.use('/holidays', holidayRoutes);
    router.use('/meeting-time', meetingRoutes);

    return router;
};
