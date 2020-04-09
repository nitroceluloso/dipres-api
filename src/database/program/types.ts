
import { Document } from "mongoose";

interface Program {
    code: number;
    year: number;
    name: string;
    evaluation: Evaluation;
    ministry: Ministry;
    publicService: PublicService;
}

interface Ministry{
    name: string;
    code: number;
}

interface Evaluation {
    description: string;
    value: number;
}

interface PublicService {
    name: string;
    code: number;
}

export interface ProgramDocument extends Program, Document {}