
import { Router } from 'express';

import { MinistryRouter } from "./ministry/Ministry.routes";
import { PublicServiceRouter } from "./public-service/PublicService.routes";

const RoutesModule = Router();
RoutesModule.use("/v1/ministry", MinistryRouter)
RoutesModule.use("/v1/public-service", PublicServiceRouter)
// RoutesModule.use("/program", )

export { RoutesModule };