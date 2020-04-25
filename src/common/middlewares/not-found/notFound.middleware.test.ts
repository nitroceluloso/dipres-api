
import { notFoundMiddleware } from "./notFound.middleware";

describe('notFound [middleware]', () => {
    test('should works', () => {
        const req = {} as any;
        const res = {
            status: () => {
                return {
                    send: () => {}
                }
            }
        } as any;

        notFoundMiddleware(req, res);
    });
});