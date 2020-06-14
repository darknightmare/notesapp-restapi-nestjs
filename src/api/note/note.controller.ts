import { Controller, Post, Res, Body, HttpStatus, Get, Delete, Put, Req, Param, NotFoundException } from '@nestjs/common';
import { NoteService } from './note.service';
import { noteDTO } from './note.dto';
import { identity } from 'rxjs';

@Controller('notes')
export class NoteController {
    constructor (private readonly noteService: NoteService) {}

    @Get('/')
    private async getNotes(@Res() res: any) {
        const notes = await this.noteService.getNotes();
        return res.status(HttpStatus.OK).json(notes);
    }

    @Get('/:id')
    private async getNote(@Res() res: any, @Param('id') id) {
        const note = await this.noteService.getNote(id);
        return res.status(HttpStatus.OK).json(note);
    }

    @Post('/')
    private async postNote(@Res() res: any, @Body() DTO: noteDTO) {
        const note = await this.noteService.postNote(DTO);
        return res.status(HttpStatus.OK).json(note);
    }

    @Put('/:id')
    private async puNote(@Res() res: any, @Param('id') id, @Body() DTO: noteDTO) {
        const note = await this.noteService.putNote(id, DTO);
        if (!note) throw new NotFoundException(`Note ${note.title} does not exist`);
        return res.status(HttpStatus.OK).json({
            message: `Note \"${note.title}\" has been successfully updated.`,
            note
        });
    }

    @Delete('/:id')
    private async deleteNote(@Res() res: any, @Param('id') id) {
        const note = await this.noteService.deleteNote(id);
        if (!note) throw new NotFoundException(`Note ${note.title} does not exist`);
        return res.status(HttpStatus.OK).json({
            message: `Note \"${note.title}\" has been successfully deleted.`,
            note
        });
    }
    
}
