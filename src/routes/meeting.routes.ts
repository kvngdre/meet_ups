import { Router } from 'express';
import MeetUpController from '../controllers/meetup.controller';

const router = Router();

router.post('/datetime', MeetUpController.getMeetUpTime);

export default router;