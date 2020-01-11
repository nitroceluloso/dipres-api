
import { Document } from "mongoose";
import { Ministry } from "../../models/ministry/types";

export interface MinistryDocument extends Ministry, Document {}