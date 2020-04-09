
import { Request, Response, NextFunction } from 'express';
import { ProgramService } from "../../services/program/Program.service";
import { getAllKeys } from "./Program.validation";
import { clearRequest } from "../controller.helper";

export class ProgramController {

    static async Get(req: Request, res: Response, next: NextFunction) {
        const query = clearRequest(req.query, getAllKeys);

        try {
            const programs = await ProgramService.Get(query as any);
            res.json(programs);
        } catch (error) {
            next(error);
        }
    }

}