import { Schema } from 'mongoose';

export const NoteSchema = new Schema(
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

