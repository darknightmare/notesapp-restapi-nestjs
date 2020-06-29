import { Controller, Post, Res, Body, HttpStatus, Get, Delete, Put, Param, NotFoundException, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { notesDTO } from './notes.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('notes')
export class NotesController {
    constructor (private readonly notesService: NotesService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/')
    private async getNotes(@Res() res: any) {
        const notes = await this.notesService.getNotes();
        return res.status(HttpStatus.OK).json(notes);
    }

    @Get('/fav')
    private async getFavNotes(@Res() res: any, @Param('favorite') favorite) {
        const favNotes = await this.notesService.getFavNotes(favorite);
        return res.status(HttpStatus.OK).json(favNotes);
    }

    @Get('/:id')
    private async getNote(@Res() res: any, @Param('id') id) {
        const note = await this.notesService.getNote(id);
        return res.status(HttpStatus.OK).json(note);
    }

    @Post('/')
    private async postNote(@Res() res: any, @Body() DTO: notesDTO) {
        const note = await this.notesService.postNote(DTO);
        return res.status(HttpStatus.OK).json(note);
    }

    @Put('/:id')
    private async putNote(@Res() res: any, @Param('id') id, @Body() DTO: notesDTO) {
        const note = await this.notesService.putNote(id, DTO);
        if (!note) throw new NotFoundException(`Note ${note.title} does not exist`);
        return res.status(HttpStatus.OK).json({
            message: `Note \"${note.title}\" has been successfully updated.`,
            note
        });
    }

    @Delete('/:id')
    private async deleteNote(@Res() res: any, @Param('id') id) {
        const note = await this.notesService.deleteNote(id);
        if (!note) throw new NotFoundException(`Note ${note.title} does not exist`);
        return res.status(HttpStatus.OK).json({
            message: `Note \"${note.title}\" has been successfully deleted.`,
            note
        });
    }
    
}