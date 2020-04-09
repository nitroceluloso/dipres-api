
import { OptionsRoutesParams } from "../types";

export interface ProgramQuery extends IndexSignature<string | number | undefined>, OptionsRoutesParams {
    evaluation: string;
    ministry: string;
    publicService: string;
    year: string;
}