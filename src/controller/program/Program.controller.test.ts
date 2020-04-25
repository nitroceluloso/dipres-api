
import { ProgramController } from "./Program.controller";


jest.mock('../../services/program/Program.service', () => {
    return {
        ProgramService: {
            Get: jest.fn().mockReturnValue([Promise.resolve([])])
        }
    }
});

describe('program [controller]', () => {

    test('get ', async () => {
        const req = {
            query: {}
        } as any;

        const res = {
            json: jest.fn()
        } as any;

        await ProgramController.Get(req, res, () => {});
        expect(res.json).toHaveBeenCalled();
    });

});