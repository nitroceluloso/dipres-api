
import { parseIfNumber } from "../parse-if-number/parseIfNumber";

export const nestedArrayToObject = (nestedArray: Array< Array<any> >) => {
    return nestedArray.reduce((prev, actual) => {
        return {
            ...prev,
            [actual[0]]: parseIfNumber(actual[1])
        }
    }, {});
}