
import { MinistryDatabase } from "../../database/ministry/Ministry.database";

export class MinistryService {

    static async Get() {
        return await MinistryDatabase.Get();
    }

}