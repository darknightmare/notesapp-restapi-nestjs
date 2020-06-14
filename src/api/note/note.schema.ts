import { Schema } from 'mongoose';

export const NoteSchema = new Schema(
    {
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

