import axios from 'axios';
import config from '../config/config';
import { IHolidayInput } from '../interfaces/IHoliday';
import CountryDAO from '../daos/country.dao';
import NotFoundError from '../errors/NotFoundError';

class HolidayService {
    async getHolidays(holidayPayload: IHolidayInput) {
        const { country, year } = holidayPayload;
        try {
            const foundCountry = await CountryDAO.findOne({
                country_name: country,
            });
            if(!foundCountry) throw new NotFoundError('Country not supported.');

            const url = new URL(config.holidayAPI.url!);
            url.searchParams.set('api_key', config.holidayAPI.key!);
            url.searchParams.set('country', foundCountry.country_code);
            url.searchParams.set('year', year);

            console.log(url);
            const response = await axios.post(url.href);

            console.log(response.data);
            return response.data.response;
        } catch (exception) {
            throw exception;
        }
    }
}

export default HolidayService;
