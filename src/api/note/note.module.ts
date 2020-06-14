import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from './note.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Notes', // Collection
      schema: NoteSchema,
    }], 'notes')
  ],
  controllers: [NoteController],
  providers: [NoteService]
})
export class NoteModule {}
