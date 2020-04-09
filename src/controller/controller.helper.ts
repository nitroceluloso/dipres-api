
import _ from "lodash";

const optionalParams = ['limit', 'page']

export const clearRequest = (payload: Object, keys: Array<string>) => {
    const completeKeys = [...optionalParams, ...keys];
    return _.pick(payload, completeKeys)
}