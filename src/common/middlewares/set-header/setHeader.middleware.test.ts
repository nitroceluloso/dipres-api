
import { setHeaderMiddleware } from "./setHeader.middleware";

describe('set header [middleware] ', () => {
    test('should work', () => {
        const req = {} as any;
        const res = {
            append: () => {}
        } as any;
        const cb = jest.fn();

        setHeaderMiddleware(req, res, cb);
        expect(cb).toHaveBeenCalled()
    });
});