
import { PublicServiceService } from "./PublicService.service";

jest.mock('../../database/ministry/Ministry.database', () => {
    return {
        ProgramDatabase: {
            Get: jest.fn().mockReturnValue([Promise.resolve([])])
        }
    }
})

describe('Public service [service]', () => {

    test('get', () => {
        PublicServiceService.Get();
    });

});