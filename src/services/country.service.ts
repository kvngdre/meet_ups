import CountryDAO from '../daos/country.dao';
import NotFoundError from '../errors/NotFoundError';
import { ICountry, ICountryInput } from '../interfaces/ICountry';

class CountryService {
    static async create(newCountryDto: ICountryInput): Promise<ICountry> {
        const newCountry: ICountry = await CountryDAO.insert(newCountryDto);

        return newCountry;
    }

    static async getCountries(queryObject: Partial<ICountryInput> = {}) {
        const foundCountries: ICountry[] = await CountryDAO.findAll(
            queryObject
        );
        if (foundCountries.length)
            throw new NotFoundError('No countries found.');

        const count = Intl.NumberFormat('en-US').format(foundCountries.length);

        return { count, foundCountries };
    }

    static async getCountry(countryId: string) {
        const foundCountry = await CountryDAO.findById(countryId);

        return foundCountry;
    }

    static async updateCountry(
        countryId: string,
        updateCountryDto: Partial<ICountry>
    ) {
        const updateCountry = await CountryDAO.update(
            countryId,
            updateCountryDto
        );

        return updateCountry;
    }

    static async deleteCountry(countryId: string) {
        const deletedCountry = await CountryDAO.delete(countryId);

        return deletedCountry;
    }
}

export default CountryService;
