

import { NextFunction, Response, Request } from "express";

export const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).send();
}