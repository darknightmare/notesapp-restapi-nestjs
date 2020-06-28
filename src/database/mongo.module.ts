import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            connectionName: 'notes',
            useFactory: () => ({
                uri: ''
            })
        })
    ]
})
export class MongoModule {}
