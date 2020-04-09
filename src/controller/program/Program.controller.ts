
import { Request, Response, NextFunction } from 'express';
import { ProgramService } from "../../services/program/Program.service";

export class ProgramController {

    static async Get(req: Request, res: Response, next: NextFunction) {
        const { query } = req;

        try {
            const programs = await ProgramService.Get(query as any);
            res.json(programs);
        } catch (error) {
            next(error);
        }
    }

}