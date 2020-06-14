import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './interfaces/note.interface';
import { noteDTO } from './dto/note.dto';

@Injectable()
export class NoteService {
    constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}

    public async getNotes(): Promise<Note[]> {
        return await this.noteModel.find();
    }

    public async getNote(noteId: string): Promise<Note> {
        return await this.noteModel.findById(noteId);
    }

    public async postNote(DTO: noteDTO): Promise<Note> {
        return await new this.noteModel(DTO).save();
    }

    public async putNote(DTO: noteDTO, noteId: string): Promise<Note> {
        return await this.noteModel.findByIdAndUpdate(DTO, noteId, {new: true});
    }

    public async deleteNote(noteId: string): Promise<Note> {
        return await this.noteModel.findByIdAndDelete(noteId);
    }
}
