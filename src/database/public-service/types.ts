
import { Document } from "mongoose";

interface PublicService {
    name: string;
    code: number;
    creationDate: Date;
}

export interface PublicServiceDocument extends PublicService, Document {}