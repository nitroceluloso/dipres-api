
import { createOptions, createQuery } from "./services.helper";


describe('Services [helper]', () => {

    test('createOptions', () => {
        const resp = createOptions({});
        const match = {
            skip: 0,
            limit: 100
        }

        expect(resp).toEqual(match);
    });

    test('createQuery', () => {
        const req = { test: 1 }
        const fields = new Map([ ['test', 'otherName'] ])
        const resp = createQuery(req, fields);

        expect(resp).toEqual({otherName: 1})
    });

});