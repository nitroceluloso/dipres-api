
import ProgramSchema from "./Program.schema";
import { mongoOptions } from "../types";

export class ProgramDatabase {
    static async Get(query: Object, options: mongoOptions) {

        return await ProgramSchema
            .find(query)
            .setOptions(options);
    }
}