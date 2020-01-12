
import { Request, Response, NextFunction } from 'express';
import { ProgramService } from "../../services/program/Program.service";
import { ProgramQuery } from './types';

export class ProgramController {

    static async Get(req: Request, res: Response, next: NextFunction) {
        const query = req.query as ProgramQuery;
        try {
            const programs = await ProgramService.Get(query);
            res.json(programs);
        } catch (error) {
            next(error);
        }
    }

}