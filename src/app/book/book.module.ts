import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './book.routing';
import { FormsModule,Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookdataService, IBookDataService } from './shared/bookdata.service'
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';

import { ConfirmCandeactivateGuardService } from './shared/confirm-candeactivate-guard.service';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component'

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookComponent,
    BookEditComponent,
    BookNewComponent
  ],
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    { provide: BookdataService, useClass: BookdataService },
    ConfirmCandeactivateGuardService
  ]
})
export class BookModule { }
