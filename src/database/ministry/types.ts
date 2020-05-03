
import { Document } from "mongoose";

interface Ministry {
    name: string;
    code: number;
    programs: string;
    evaluation: object;
    creationDate: Date
}

export interface MinistryDocument extends Ministry, Document {}