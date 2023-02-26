import { IUserInput } from '../interfaces/IUser';
import decisionEngine from '../controllers/decisionEngine';

class MeetupService {
    static async getMeetingDateTime({ users }: { users: IUserInput[] }) {
        const suitableDateTime = await decisionEngine(users);

        return {
            from: suitableDateTime,
            to: suitableDateTime.plus({ hour: 2 }),
        };
    }
}

export default MeetupService;