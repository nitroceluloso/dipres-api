
import { PublicServiceController } from "./PublicService.controller";

jest.mock('../../services/public-service/PublicService.service', () => {
    return {
        PublicServiceService: {
            Get: jest.fn().mockReturnValue([Promise.resolve([])])
        }
    }
});

describe('Public service [controller]', () => {

    test('Get', async () => {
        const req = {} as any;

        const res = {
            json: jest.fn()
        } as any;

        await PublicServiceController.Get(req, res, () => {});
        expect(res.json).toHaveBeenCalled();
    });

});