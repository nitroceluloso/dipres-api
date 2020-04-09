
import MinistrySchema from "./Ministry.schema";
import { createOptions } from "../../services/services.helper";

export class MinistryDatabase {

    static async Get(query?: object, options = createOptions({})) {
        return await MinistrySchema.find(query).setOptions(options);
    }

}