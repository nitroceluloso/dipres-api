
import { ProgramService } from "./Program.service";

jest.mock('../../database/program/Program.database', () => {
    return {
        ProgramDatabase: {
            Get: jest.fn().mockReturnValue([Promise.resolve([])])
        }
    }
})

describe('Program [service]', () => {
    
    test('get', () => {
        ProgramService.Get({} as any);
    });

});