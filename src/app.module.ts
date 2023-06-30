import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'bookstore',
    autoLoadEntities: true,
    synchronize: true,
  }), 
  BooksModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
