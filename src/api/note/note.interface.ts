import { Document } from 'mongoose';

export interface Note extends Document{
    readonly id: string;
    readonly title: string;
    readonly body: string;
    readonly createdAt: Date;
}