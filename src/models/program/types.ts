
import { Evaluation } from "../evaluation/types";
import { Ministry } from "../ministry/types";
import { PublicService } from "../public-service/types";

export interface Program {
    code?: number;
    year: number;
    name: string;
    evaluation: Evaluation;
    ministry: Ministry;
    publicService: PublicService;
}