
import mongoose, { Schema } from 'mongoose';
import { PublicServiceDocument } from './types';

export const PublicServiceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model<PublicServiceDocument>('publicService', PublicServiceSchema, 'public-service');