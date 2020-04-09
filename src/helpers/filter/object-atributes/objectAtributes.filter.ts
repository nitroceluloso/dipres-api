
import _ from "lodash";

export const pickAtributes = (payload: Object, keys: Array<string>) => _.pick(payload, keys);