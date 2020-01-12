
import { Router } from 'express';
import { PublicServiceController } from "./PublicService.controller";

const PublicServiceRouter = Router();
PublicServiceRouter.get("/", PublicServiceController.Get);

export { PublicServiceRouter };