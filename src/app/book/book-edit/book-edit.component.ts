import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { Book } from '../shared/ibook';
import { BookdataService } from '../shared/bookdata.service'

@Component({
  selector: 'sg-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})


export class BookEditComponent implements OnInit, OnDestroy {

  public isbn: string;
  private rooterSubscription: Subscription;
  private serviceSubscription: Subscription;
  public book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookdataService, private location: Location) {
  }


public saved: boolean;

  ngOnInit() {
    this.rooterSubscription = this.route.params.subscribe((params: { isbn: string }) => { this.isbn = params.isbn });
    this.serviceSubscription = this.bookService.getByIsbn(this.isbn).subscribe(book => this.book = book);
    this.saved = false;

  }

  ngOnDestroy() {
    this.rooterSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }

  save(value: any): void {
  this.bookService.updateBook(this.book.isbn, value)
      .subscribe((book: Book) => console.log('Book updated', book));
      this.saved = true;
      this.location.back();
  }

}
