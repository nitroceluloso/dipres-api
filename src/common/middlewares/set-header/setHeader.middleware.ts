
import { NextFunction, Response, Request } from "express";
import { globalConfig } from "../../../config";

export const setHeaderMiddleware = (req: Request, res: Response, next: NextFunction) => {
    res.append("app-version", globalConfig.APP_VERSION);
    next();
}