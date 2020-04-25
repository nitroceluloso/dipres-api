
import { parseIfNumber } from "../parse-if-number/parseIfNumber.parser";

export const nestedArrayToObject = (nestedArray: Array< Array<any> >) => nestedArray.reduce(reduceFunction, {});

const reduceFunction = (prev: any, actual: any) => {
    return {
        ...prev,
        [actual[0]]: parseIfNumber(actual[1])
    }
}