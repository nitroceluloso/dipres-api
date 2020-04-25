
import { pickAtributes } from "./objectAtributes.filter";

describe('ObjectAtributes [filter]', () => {
    test('should remove extra atributes', () => {
        const baseObj = {
            notRemove: false,
            remove: true
        }
        const resp = pickAtributes(baseObj, ['notRemove'])
        expect(resp).toEqual({notRemove: false})
    });
});