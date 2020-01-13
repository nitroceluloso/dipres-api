
import { Router } from 'express';
import { MinistryController } from "./Ministry.controller";

const MinistryRouter = Router();
MinistryRouter.get("/", MinistryController.Get);

export { MinistryRouter };