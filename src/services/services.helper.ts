
import { nestedArrayToObject } from "../helpers/parser/nested-array-to-object/nestedArrayToObject.parser";
import { OptionsRoutesParams } from "../controller/types";
import { pickAtributes } from "../helpers/filter/object-atributes/objectAtributes.filter";
import { MongoQueryOptions } from "./types";

export const createQuery = <T extends IndexSignature<any>>(payload: T, acceptedParams: Map<string, string>) => {
    const clearPayload = pickAtributes(payload, Array.from(acceptedParams.keys()));
    const payloadKeys = Object.keys(clearPayload);

    const arrayQuery = payloadKeys.map((el) => [ acceptedParams.get(el), payload[el] ]);
    return nestedArrayToObject(arrayQuery);
}

export const createOptions = (payload: OptionsRoutesParams): MongoQueryOptions => {
    const { page: skip = 0, limit = 100 } = payload;

    return {
        skip,
        limit
    }
}
