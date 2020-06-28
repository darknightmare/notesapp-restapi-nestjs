import { Schema } from 'mongoose';

export const NotesSchema = new Schema(
    {
        title: {
            type: String,
            required: false
        },
        body: {
            type: String,
            required: true
        },
        favorite: {
            type: String,
            required: true,
            default: false
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

