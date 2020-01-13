
import { Document } from "mongoose";
import { Program } from "../../models/program/types";

export interface ProgramDocument extends Program, Document {}