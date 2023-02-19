import { Request, Response } from 'express';
import APIResponse from '../utils/APIResponse';
import HolidayService from '../services/holiday.service';
import httpCodes from '../enums/httpCodes';
import validateGetHolidayDto from '../validators/holiday.validator';
import ValidationError from '../errors/ValidationError';

function getMessage(count: string | number) {
    if (typeof count === 'string') count = parseInt(count);

    if (count === 1) return `${count} holiday found.`;
    return `${count} holidays found.`;
}

class HolidayController {
    static async getHoliday(req: Request, res: Response) {
        const { value, error } = validateGetHolidayDto(req.body);
        if (error) throw new ValidationError(error.message);

        const { count, holidays } = await HolidayService.getHolidays(value);
        const response = new APIResponse(getMessage(count), holidays);

        return res.status(httpCodes.OK).json(response);
    }
}

export default HolidayController;
