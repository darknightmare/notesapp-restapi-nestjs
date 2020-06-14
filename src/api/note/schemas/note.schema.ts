import { Schema } from 'mongoose';
import { title } from 'process';

export const noteSchema = new Schema(
    {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: false
        },
        body: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

