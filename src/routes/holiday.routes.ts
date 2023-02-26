import { Router } from 'express';
import HolidayController from '../controllers/holiday.controller';

const router = Router();

router.post('/get-holiday', HolidayController.getHoliday)

export default router;