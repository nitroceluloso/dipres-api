
import { parseIfNumber } from "../parse-if-number/parseIfNumber.parser";

/**
 * Returns an object with the posible numbers parsed.
 * @param obj Plain object.
 */
export const parseValuesFromObject = (obj: IndexSignature<string>) => Object.entries(obj).reduce(arrayToObjectParser, {});

const arrayToObjectParser = (prev: object, act: Array<any>) => {
    const [ key, value ] = act;

    return {
        ...prev,
        [key]: parseIfNumber(value)
    }
}