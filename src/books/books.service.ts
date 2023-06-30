import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async getBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async getBook(bookID): Promise<Book[]> {
    return new Promise((resolve) => {
      const book = this.bookRepository.find(bookID);
      if (!book) {
        throw new HttpException('Book does notexist!', 404);
      }
      resolve(book);
    });
  }

  async addBook(bookData: Book): Promise<Book> {
    const book = this.bookRepository.create(bookData);
    return await this.bookRepository.save(book);
  }

  async deleteBook(bookID: number): Promise<any> {
    const book = await this.getBook(bookID);
    await this.bookRepository.remove(book);
    const books = await this.getBooks();
    return { message: 'Livro excluído com sucesso', books };
  }
}
