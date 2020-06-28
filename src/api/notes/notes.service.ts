import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Notes } from './notes.interface';
import { notesDTO } from './notes.dto';

@Injectable()
export class NotesService {
    constructor(@InjectModel('Notes') private readonly notesModel: Model<Notes>) {}

    public async getNotes(): Promise<Notes[]> {
        return await this.notesModel.find();
    }

    public async getFavNotes(favorite: boolean): Promise<Notes[]> {
        return await this.notesModel.find({favorite: true});
    }

    public async getNote(id: string): Promise<Notes> {
        return await this.notesModel.findById(id);
    }

    public async postNote(DTO: notesDTO): Promise<Notes> {
        return await new this.notesModel(DTO).save();
    }

    public async putNote(id: string, DTO: notesDTO): Promise<Notes> {
        return await this.notesModel.findByIdAndUpdate(id, DTO, {new: true});
    }

    public async deleteNote(id: string): Promise<Notes> {
        return await this.notesModel.findByIdAndDelete(id);
    }
}