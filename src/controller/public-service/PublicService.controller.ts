
import { Request, Response, NextFunction } from 'express';
import { PublicServiceService } from "../../services/public-service/PublicService.service";

export class PublicServiceController {

    static async Get(req: Request, res: Response, next: NextFunction) {
        try {
            const publicServices = await PublicServiceService.Get();
            res.json(publicServices);
        } catch (error) {
            next(error);
        }
    }

}