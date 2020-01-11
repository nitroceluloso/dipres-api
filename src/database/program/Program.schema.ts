
import mongoose, { Schema } from 'mongoose';
import { ProgramDocument } from './types';
import { MinistrySchema } from "../ministry/Ministry.schema";
import { PublicServiceSchema } from "../public-service/PublicService.schema";

const ProgramSchema = new Schema({
    year: {
        type: Number,
        requred: true
    },
    name: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    evaluation: {
        description: {
            type: String,
            requred: true
        },
        value: {
            type: Number,
            required: true
        }
    },
    ministry: MinistrySchema,
    publicService: PublicServiceSchema,
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model<ProgramDocument>('program', ProgramSchema, 'program');