import { Document } from 'mongoose';

export interface Notes extends Document{
    readonly title: string;
    readonly body: string;
    readonly favorite: boolean;
    readonly createdAt: Date;
}