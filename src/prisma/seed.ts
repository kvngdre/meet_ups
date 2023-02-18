import { ICountryInput } from '../interfaces/ICountry';
import { PrismaClient } from '@prisma/client';
// @ts-ignore
import countriesData from './countries.json';
import logger from '../loaders/logger';

const prisma = new PrismaClient();

async function seedCountries() {
    await prisma.country.deleteMany({});
    Promise.all(
        countriesData.map(async (c: ICountryInput) => {
            await prisma.country.create({
                data: {
                    country_code: c.country_code,
                    country_name: c.country_name,
                    timezone: c.timezone,
                    offset: c.offset,
                },
            });
        })
    );
}

seedCountries()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error('Failed to seed DB.');
        logger.fatal(e.message, e.stack);
        await prisma.$disconnect();
        process.exit(1);
    });
