
import { Request, Response, NextFunction } from 'express';
import { MinistryService } from "../../services/ministry/Ministry.service";

export class MinistryController {

    static async Get(req: Request, res: Response, next: NextFunction) {
        try {
            const ministries = await MinistryService.Get();
            res.json(ministries);
        } catch (error) {
            next(error);
        }
    }

}