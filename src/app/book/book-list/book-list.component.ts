import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book, IBook } from '../shared/ibook';
import { BookdataService, IBookDataService } from '../shared/bookdata.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'sg-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css']
})

export class BookListComponent implements OnInit, OnDestroy {

  public books: IBook[];

  private subscription: Subscription;

  constructor(private bookdata: BookdataService) { }

  ngOnInit() {
    this.subscription = this.bookdata.getBooks().subscribe(bücher => this.books = bücher);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
