import { ParamWithId } from '../interfaces/IParamsWithId';
import { Request, Response } from 'express';
import APIResponse from '../utils/APIResponse';
import CountryService from '../services/country.service';
import httpCodes from '../enums/httpCodes';
import { validateNewCountryDto } from '../validators/country.validators';

function getMessage(count: string | number) {
    if (typeof count === 'string') count = parseInt(count);

    if (count === 1) return `${count} country found.`;
    return `${count} countries found.`;
}

class CountryController {
    static async createCountry(req: Request, res: Response) {
        const value = validateNewCountryDto.safeParse(req.body);
        console.log(value);
        
        const newCountry = await CountryService.create(req.body);
        const response = new APIResponse('Country created.', newCountry);

        return res.status(httpCodes.CREATED).json(response);
    }

    static async getAllCountries(req: Request, res: Response) {
        const { count, foundCountries } = await CountryService.getCountries();
        const response = new APIResponse(getMessage(count), foundCountries);

        return res.status(httpCodes.OK).json(response);
    }

    static async getCountry(req: Request<ParamWithId>, res: Response) {
        const foundCountry = await CountryService.getCountry(req.params.id);
        const response = new APIResponse('Retrieved country.', foundCountry);

        return res.status(httpCodes.OK).json(response);
    }

    static async updateCountry(req: Request<ParamWithId>, res: Response) {
        const updatedCountry = await CountryService.updateCountry(
            req.params.id,
            req.body
        );
        const response = new APIResponse('Country updated.', updatedCountry);

        return res.status(httpCodes.OK).json(response);
    }

    static async deleteCountry(req: Request<ParamWithId>, res: Response) {
        await CountryService.deleteCountry(req.params.id);
        const response = new APIResponse('COuntry deleted.');

        return res.status(httpCodes.OK).json(response);
    }
}

export default CountryController;
