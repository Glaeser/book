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

  public getBooks(): Observable<Book[]> {
    // return Observable.of(this.books);
    const url = 'http://localhost:4730/books';
    return this.http.get(url).map(response => response.json());
  }

  public getByIsbn(isbn: string): Observable<Book> {
    let url = `http://localhost:4730/books/${isbn}`;
    return this.http.get(url).map(response => response.json());
  }

}
