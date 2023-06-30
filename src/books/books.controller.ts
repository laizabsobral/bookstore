import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get(':bookID')
  async getBook(@Param('bookID') bookID) {
    const book = await this.booksService.getBook(bookID);
    return book;
  }

  @Post()
  async addBook(@Body() bookData) {
    const book = await this.booksService.addBook(bookData);
    return book;
  }

  @Delete(':bookID')
  async deleteBook(@Param('bookID') bookID) {
    const books = await this.booksService.deleteBook(bookID);
    return books;
  }
}
