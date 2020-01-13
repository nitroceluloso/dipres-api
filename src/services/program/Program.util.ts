
import { ProgramQuery } from "../../controller/program/types";

const queryAccepted = new Map([
    ["evaluation", "object"],
    ["ministry", "object"],
    ["publicService", "object"],
    ["year", "number"]
]);

const queryOptions = new Set(["page"]);

export const createQuery = (payload: ProgramQuery) => {

    let response = {};
    const payloadKeys = Object.keys(payload);

    queryAccepted.forEach((value, key) => {
        if(!payloadKeys.includes(key)) return;

        const type = value;
        const keyFinal = createKey(type, key);
        const rawElement = payload[key] as string;
        const element = createElement(type, rawElement);

        response = {
            ...response,
            [keyFinal]: element
        }

    });

    return response;
}

const createKey = (type: string, keyBase: string): string => {
    let response;
    switch (type) {
        case "object":
            response = `${keyBase}._id`;
        break;

        case "number":
            response = keyBase;
        break;
    }
    return response as string;
}

const createElement = (type: string, element: string) => {
    let response;
    switch (type) {
        case "object":
            response = element;
        break;

        case "number":
            response = parseInt(element, 10);
        break;
    }

    return response;
}

export const createOption = (payload: ProgramQuery) => {

    let response = {};
    const payloadKeys = Object.keys(payload);

    queryOptions.forEach((key) => {
        if(!payloadKeys.includes(key)) return;

        const element = payload[key];

        response = {
            ...response,
            [key]: element
        }

    });

    return response;
}