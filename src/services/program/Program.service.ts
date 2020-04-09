
import { ProgramDatabase } from "../../database/program/Program.database";
import { acceptedParams } from "./Program.service.helper";
import { ProgramQuery } from "../../controller/program/types";
import { createQuery, createOptions } from "../services.helper";

export class ProgramService {

    static async Get(payload: ProgramQuery) {
        const query = createQuery(payload, acceptedParams);
        const opt = createOptions(payload);

        return await ProgramDatabase.Get(query, opt);
    }

}