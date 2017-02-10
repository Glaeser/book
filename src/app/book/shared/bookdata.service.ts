import { Injectable } from '@angular/core';
import { Book, IBook } from './ibook';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


export interface IBookDataService {
  getBooks(): IBook[];
}

@Injectable()
export class BookdataService {

  constructor(private http: Http) { }
  private url = 'http://localhost:4730/books';
  public getBooks(): Observable<Book[]> {
    // return Observable.of(this.books);

    return this.http.get(this.url).map(response => response.json());
  }

  public getByIsbn(isbn: string): Observable<Book> {
    let url = `http://localhost:4730/books/${isbn}`;
    return this.http.get(url).map(response => response.json());
  }
  createBook(book: Book): Observable<Book> {
    return this.http.post(this.url, book).map(response => response.json());
  }
  updateBook(isbn: string, vector: any): Observable<Book> {
    let url = `http://localhost:4730/books/${isbn}`;
    return this.http.patch(url, vector).map(response => response.json());
  }

}
