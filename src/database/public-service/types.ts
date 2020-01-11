
import { Document } from "mongoose";
import { PublicService } from "../../models/public-service/types";

export interface PublicServiceDocument extends PublicService, Document {}