
import { Router } from 'express';
import { ProgramController } from "./Program.controller";

const ProgramServiceRouter = Router();
ProgramServiceRouter.get("/", ProgramController.Get);

export { ProgramServiceRouter };