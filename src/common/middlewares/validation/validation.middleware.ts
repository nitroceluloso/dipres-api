
import { Request, Response, NextFunction } from "express";
import { struct } from "superstruct";
import { optionalQuery } from "../../../controller/controller.validation";
import { parseValuesFromObject } from "../../../helpers/parser/query-param-values/queryParamValues.parser";

export const validationQueryGenerator = (validationObj: Object) => (req: Request, res: Response, next: NextFunction) => {
    const mergeValidators = {...validationObj, ...optionalQuery}
    const validationSchema = struct(mergeValidators);

    try {
        const queryObject = parseValuesFromObject(req.query as any);
        validationSchema(queryObject);
        next();
    } catch (error) {
        res.sendStatus(400)
    }
}


export const validationBodyGenerator = (validationObj: Object) => (req: Request, res: Response, next: NextFunction) => {
    const validationSchema = struct(validationObj);

    try {
        validationSchema(req.body);
        next();
    } catch (error) {
        res.sendStatus(400)
    }
}