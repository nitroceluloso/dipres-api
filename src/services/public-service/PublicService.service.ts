
import { PublicServiceDatabase } from "../../database/public-service/PublicService.database";

export class PublicServiceService {

    static async Get() {
        return await PublicServiceDatabase.Get();
    }

}