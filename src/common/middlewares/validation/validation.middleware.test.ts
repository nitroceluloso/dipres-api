
import { validationBodyGenerator, validationQueryGenerator } from "./validation.middleware";

describe('validation [middleware]', () => {

    describe('validation body generator', () => {
        test('should works', () => {
            const req = {
                body: {
                    age: 11
                }
            } as any;
            const res = {} as any;
            const next = jest.fn();

            const validationObj = {
                age: 'number'
            }

            const fn = validationBodyGenerator(validationObj);
            fn(req, res, next)

            expect(next).toHaveBeenCalled()
        });
    });


    describe('validation query generator', () => {
        test('should works', () => {
            const req = {
                query: {
                    age: 11
                }
            } as any;
            const res = {} as any;
            const next = jest.fn();

            const validationObj = {
                age: 'number'
            }

            const fn = validationQueryGenerator(validationObj);
            fn(req, res, next)

            expect(next).toHaveBeenCalled()
        });
    });

});