
import { ProgramDatabase } from "../../database/program/Program.database";
import { createOption, createQuery } from "./Program.util";
import { ProgramQuery } from "../../controller/program/types";

export class ProgramService {

    static async Get(payload: ProgramQuery) {
        const query = createQuery(payload);
        const opt = createOption(payload);

        return await ProgramDatabase.Get(query, opt);
    }

}