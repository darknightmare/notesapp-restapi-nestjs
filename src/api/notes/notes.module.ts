import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesSchema } from './notes.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Notes',
      schema: NotesSchema,
    }], 'notes'),
    PassportModule
  ],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}
