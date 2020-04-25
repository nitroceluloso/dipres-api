
import { MinistryController } from "./Ministry.controller";

jest.mock('../../services/ministry/Ministry.service', () => {
    return {
        MinistryService: {
            Get: jest.fn().mockReturnValue(Promise.resolve([]))
        }
    }
});

describe('ministry [controller]', () => {
    test('get', async () => {
        const req = {} as any;

        const res = {
            json: jest.fn()
        } as any;

        await MinistryController.Get(req, res, () => {});
        expect(res.json).toHaveBeenCalled();
    });
});