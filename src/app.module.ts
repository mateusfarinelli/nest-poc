import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './modules/person/person.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
