
import PublicServiceSchema from "./PublicService.schema";

export class PublicServiceDatabase {

    static async Get() {
        return PublicServiceSchema.find();
    }

}