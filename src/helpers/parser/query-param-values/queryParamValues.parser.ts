
import { parseIfNumber } from "../parse-if-number/parseIfNumber";

export const parseValuesFromObject = (obj: IndexSignature<string>) => {
    const keys = Object.keys(obj);

    return keys.reduce((prev, current) => {
        return {
            ...prev,
            current: parseIfNumber(obj[current])
        }
    }, {});
}