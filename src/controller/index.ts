
import { Router } from 'express';

import { MinistryRouter } from "./ministry/Ministry.routes";
import { PublicServiceRouter } from "./public-service/PublicService.routes";
import { ProgramServiceRouter } from "./program/Program.routes";

const RoutesModule = Router();
RoutesModule.use("/v1/ministry", MinistryRouter)
RoutesModule.use("/v1/public-service", PublicServiceRouter)
RoutesModule.use("/v1/program", ProgramServiceRouter)

export { RoutesModule };