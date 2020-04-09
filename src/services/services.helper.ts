
import { nestedArrayToObject } from "../helpers/parser/nested-array-to-object/nestedArrayToObject.parser";
import { OptionsRoutesParams } from "../controller/types";
import { getAllKeys } from "../controller/program/Program.validation";
import { pickAtributes } from "../helpers/filter/object-atributes/objectAtributes.filter";

export const createQuery = <T extends IndexSignature<any>>(payload: T, acceptedParams: Map<string, string>) => {
    const clearPayload = pickAtributes(payload, getAllKeys);
    const payloadKeys = Object.keys(clearPayload);

    const arrayQuery = payloadKeys.map((el) => [ payload[el], acceptedParams.get(el) ]);
    return nestedArrayToObject(arrayQuery);
}

export const createOptions = (payload: OptionsRoutesParams) => {
    const { page = '0', limit = '100' } = payload;

    return {
        skip: parseInt(page),
        limit: parseInt(limit)
    }
}
