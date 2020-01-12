
import { Router } from 'express';

import { MinistryRouter } from "./ministry/Ministry.routes";

const RoutesModule = Router();
RoutesModule.use("/v1/ministry", MinistryRouter)
// RoutesModule.use("/public-service", )
// RoutesModule.use("/program", )

export { RoutesModule };