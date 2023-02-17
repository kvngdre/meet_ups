import { PrismaClient, Prisma } from '@prisma/client';
import { ICountryInput } from '../interfaces/ICountry';
import ValidationError from '../errors/ValidationError';

const prisma = new PrismaClient();

class CountryDAO {
    static async insert(newRecordDto: ICountryInput) {
        try {
            const newRecord = await prisma.country.create({
                data: newRecordDto,
            });

            return newRecord;
        } catch (exception: any) {
            if (exception instanceof Prisma.PrismaClientValidationError)
                throw new ValidationError(exception.message);

            throw exception;
        }
    }

    static async findAll(queryObject?: Partial<ICountryInput>) {
        const foundRecords = await prisma.country.findMany({
            where: queryObject,
        });

        return foundRecords;
    }

    static async findById(id: string) {
        const foundRecord = await prisma.country.findUniqueOrThrow({
            where: {
                id,
            },
        });

        return foundRecord;
    }

    static async findOne(queryObject: Partial<ICountryInput>) {
        const foundRecord = await prisma.country.findFirstOrThrow({
            where: queryObject,
        });

        return foundRecord;
    }

    static async update(id: string, updateRecordDto: Partial<ICountryInput>) {
        const updatedRecord = await prisma.country.update({
            where: { id },
            data: updateRecordDto,
        });

        return updatedRecord;
    }

    static async delete(id: string) {
        const deletedRecord = await prisma.country.delete({
            where: { id },
        });

        return deletedRecord;
    }
}

export default CountryDAO;
