import { DateTime } from 'luxon';
export interface IUserInput {
    [key: string]: DateTime | string | number | undefined;
    from: DateTime;
    to: DateTime;
    CC: string;
}
