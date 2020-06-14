import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './note.interface';
import { noteDTO } from './note.dto';

@Injectable()
export class NoteService {
    constructor(@InjectModel('Notes') private readonly noteModel: Model<Note>) {}

    public async getNotes(): Promise<Note[]> {
        return await this.noteModel.find();
    }

    public async getNote(noteId: string): Promise<Note> {
        return await this.noteModel.findById(noteId);
    }

    public async postNote(DTO: noteDTO): Promise<Note> {
        return await new this.noteModel(DTO).save();
    }

    public async putNote(noteId: string, DTO: noteDTO): Promise<Note> {
        return await this.noteModel.findByIdAndUpdate(noteId, DTO, {new: true});
    }

    public async deleteNote(noteId: string): Promise<Note> {
        return await this.noteModel.findByIdAndDelete(noteId);
    }
}
