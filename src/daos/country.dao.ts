import { ICountryInput } from '../interfaces/ICountry';
import { PrismaClient, Prisma } from '@prisma/client';
import { prismaErrorCodes } from '../enums/prismaErrorCodes';
import NotFoundError from '../errors/NotFoundError';
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
                throw new ValidationError('Validation Error.');

            throw exception;
        }
    }

    static async findAll(queryObject?: Partial<ICountryInput>) {
        const foundRecords = await prisma.country.findMany({
            where: queryObject,
        });
        if (foundRecords.length == 0)
            throw new NotFoundError('No countries found.');

        return foundRecords;
    }

    static async findById(id: string) {
        try {
            const foundCountry = await prisma.country.findUniqueOrThrow({
                where: { id },
            });

            return foundCountry;
        } catch (exception: any) {
            if (exception instanceof Prisma.PrismaClientKnownRequestError)
                if (exception.code === prismaErrorCodes.NOT_FOUND)
                    throw new NotFoundError('Country not found.');

            throw exception;
        }
    }

    static async findOne(queryObject: Partial<ICountryInput>) {
        try {
            const foundRecord = await prisma.country.findFirstOrThrow({
                where: queryObject,
            });

            return foundRecord;
        } catch (exception: any) {
            if (exception instanceof Prisma.PrismaClientKnownRequestError)
                throw new Error('Country not found');
        }
    }

    static async update(id: string, updateRecordDto: Partial<ICountryInput>) {
        try {
            const updatedRecord = await prisma.country.update({
                where: { id },
                data: updateRecordDto,
            });

            return updatedRecord;
        } catch (exception: any) {
            if (exception instanceof Prisma.PrismaClientKnownRequestError)
                throw new NotFoundError('Country not found.');

            throw exception;
        }
    }

    static async delete(id: string) {
        try {
            const deletedRecord = await prisma.country.delete({
                where: { id },
            });

            return deletedRecord;
        } catch (exception: any) {
            if (exception instanceof Prisma.PrismaClientKnownRequestError)
                throw new NotFoundError('Country not found.');

            throw exception;
        }
    }
}

export default CountryDAO;
