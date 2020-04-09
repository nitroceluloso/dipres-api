
import ProgramSchema from "./Program.schema";
import { createOptions } from "../../services/services.helper";

export class ProgramDatabase {
    static async Get(query?: Object, options = createOptions({})) {

        return await ProgramSchema
            .find(query)
            .setOptions(options);
    }
}