import { PrismaClient } from '@prisma/client';
import { ICountryInput } from '../interfaces/ICountry';

const prisma = new PrismaClient();

class CountryDAO {
    static async insert(newRecordDto: ICountryInput) {
        const newRecord = await prisma.country.create({
            data: newRecordDto,
        });

        return newRecord;
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
