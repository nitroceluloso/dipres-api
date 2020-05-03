
import { Request, Response, NextFunction } from 'express';
import { ProgramService } from "../../services/program/Program.service";
import { parseValuesFromObject } from "../../helpers/parser/query-param-values/queryParamValues.parser";

export class ProgramController {

    static async Get(req: Request, res: Response, next: NextFunction) {
        const { query } = req;
        const clearQuery = parseValuesFromObject(query as any);

        try {
            const programs = await ProgramService.Get(clearQuery as any);
            res.json(programs);
        } catch (error) {
            next(error);
        }
    }

}