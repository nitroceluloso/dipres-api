
import mongoose, { Schema } from 'mongoose';
import { MinistryDocument } from './types';

export const MinistrySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    programs: {
        type: String
    },
    evaluation: {
        value: {
            type: Number
        },
        description: {
            type: String
        }
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model<MinistryDocument>('ministry', MinistrySchema, "ministry");