
import { MinistryService } from "./Ministry.service";

jest.mock('../../database/ministry/Ministry.database', () => {
    return {
        ProgramDatabase: {
            Get: jest.fn().mockReturnValue([Promise.resolve([])])
        }
    }
})

describe('Ministry [service]', () => {

    test('get', () => {
        MinistryService.Get();
    });

});