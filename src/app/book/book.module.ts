import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './book.routing';

import { BookdataService, IBookDataService } from './shared/bookdata.service'
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    routing

  ],
  providers: [
    { provide: BookdataService, useClass: BookdataService }]
})
export class BookModule { }