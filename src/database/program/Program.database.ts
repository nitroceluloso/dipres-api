
import ProgramSchema from "./Program.schema";

export class ProgramDatabase {
    static async Get(query: any, options: any) {
        return await ProgramSchema
            .find(query)
            .skip(0)
            .limit(100);
    }
}