
import MinistrySchema from "./Ministry.schema";

export class MinistryDatabase {

    static async Get() {
        return MinistrySchema.find();
    }

}