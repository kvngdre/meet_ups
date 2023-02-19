import { DateTime } from 'luxon';
import { IUserInput } from '../interfaces/IUser';
import CountryDAO from '../daos/country.dao';
import HolidayService from '../services/holiday.service';
import NotFoundError from '../errors/NotFoundError';

async function getUserTimeZone(users: IUserInput[]) {
    const modifiedUsers = await Promise.all(
        users.map(async (user: IUserInput) => {
            try {
                const { timezone, offset } = await CountryDAO.findOne({
                    country_code: user.CC,
                });
                user.from.setZone(timezone);
                user.offset = user.from.setZone(timezone).offset;
                user.to.setZone(timezone).toUTC();
                user.from = user.from.toUTC();
                user.timezone = timezone;

                return user;
            } catch (err: any) {
                throw new NotFoundError(
                    `Country code ${user.CC} is not supported.`
                );
            }
        })
    );

    modifiedUsers.sort(
        (a: IUserInput, b: IUserInput) => (a.offset as any) - (b.offset as any)
    );

    return modifiedUsers;
}

function findStartTime(users: IUserInput[]) {
    let minStartDateTime: DateTime;

    const hour = users[0].from.setZone(users[0].timezone as string).hour;

    /*
     * Find the dateTime in UTC such that,
     * when converted to local time of the user with the
     * smallest offset the hour would be between 9:00am and 2:00pm
     * */
    if (hour > 8 && hour < 15) {
        minStartDateTime = users[0].from;
    } else if (hour < 9) {
        const diff = 9 - hour;
        minStartDateTime = users[0].from.plus({ hours: diff });
    } else {
        const diff = hour - 9;
        minStartDateTime = users[0].from.minus({ hours: diff });
    }

    return minStartDateTime;
}

function findValidDateTIme(startDateTime: DateTime, users: IUserInput[]) {
    let valid = false;
    const suitableDateTime = startDateTime;

    for (let i = 0; i <= 24; i++) {
        for (let user of users) {
            // Find UTC time when converted to user local time is within 9am and 4pm
            const h = startDateTime.setZone(user.timezone as string).hour;
            if (h > 8 && h < 17) {
                valid = true;
            } else {
                valid = false;
                break;
            }
        }
        if (valid) break;

        // increment start by an hour
        suitableDateTime.plus({ hours: 1 });
    }
    if (!valid) throw new NotFoundError('No suitable time found.');

    return suitableDateTime;
}

// check for holiday.
async function checkForHoliday(
    suitableDateTime: DateTime,
    users: IUserInput[]
) {
    let isFoundHoliday = false;

    for (let user of users) {
        const { count } = await HolidayService.getHolidays({
            country_code: user.CC,
            year: suitableDateTime.year,
            month: suitableDateTime.month,
            day: suitableDateTime.day,
        });

        if (parseInt(count) > 0) {
            isFoundHoliday = true;
            break;
        }
    }

    if(isFoundHoliday) {
        suitableDateTime = suitableDateTime.plus({ days: 1 });
        await checkForHoliday(suitableDateTime, users);
    }

    console.log('e', suitableDateTime.toString());
    return suitableDateTime;
}

export default async function decisionEngine(users: IUserInput[]) {
    try {
        const modifiedUsers = await getUserTimeZone(users);

        const minStartDateTime = findStartTime(modifiedUsers);

        let suitableDateTime = findValidDateTIme(
            minStartDateTime,
            modifiedUsers
        );

        // suitableDateTime = await checkForHoliday(suitableDateTime, modifiedUsers);

        return suitableDateTime;
    } catch (exception: any) {
        throw exception;
    }
}
