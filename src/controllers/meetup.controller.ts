import { Request, Response } from 'express';
import ValidationError from '../errors/ValidationError';
import meetupValidator from '../validators/meetup.validator';
import MeetupService from '../services/meetup.service';
import APIResponse from '../utils/APIResponse';
import httpCodes from '../enums/httpCodes';

class MeetUpController {
    static async getMeetUpTime(req: Request, res: Response) {
        const {value, error } = meetupValidator.validateMeetUpInput(req.body);
        if(error) throw new ValidationError(error.message);

        const meetDateTime = await MeetupService.getMeetingDateTime(value);
        const response = new APIResponse('Success', meetDateTime);

        res.status(httpCodes.OK).json(response);
    }
}

export default MeetUpController;