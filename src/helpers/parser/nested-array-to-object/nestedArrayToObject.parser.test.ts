
import { nestedArrayToObject } from "./nestedArrayToObject.parser";

describe('Nested array object [filter]', () => {

    test('default', () => {
        const raw = nestedArrayToObject([
            ['first', '1'],
            ['second', 2]
        ]);
        const final = { first: 1, second: 2};

        expect(raw).toEqual(final)
    });

});