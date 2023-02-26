import axios from 'axios';
import config from '../config/config';
import { IHolidayInput } from '../interfaces/IHoliday';
import CountryDAO from '../daos/country.dao';
import NotFoundError from '../errors/NotFoundError';
import CountryService from './country.service';
import BaseError from '../errors/BaseError';

class HolidayService {
    static async getHolidays(getHolidayDto: IHolidayInput) {
        const { country_code, year, month, day } = getHolidayDto;
        try {
            await CountryDAO.findOne({ country_code });

            const url = new URL(config.holidayAPI.url!);
            url.searchParams.set('api_key', config.holidayAPI.key!);
            url.searchParams.set('country', country_code);
            url.searchParams.set('year', year.toString());
            if (month) url.searchParams.set('month', month.toString());
            if (day) url.searchParams.set('day', day.toString());

            const { data } = await axios.post(url.href);
            const holidays = data.response.holidays;
            const count = Intl.NumberFormat('en-US').format(holidays.length);

            return { count, holidays };
        } catch (exception) {
            if (exception instanceof BaseError)
                throw new NotFoundError('Country not supported.');

            throw exception;
        }
    }
}

export default HolidayService;
