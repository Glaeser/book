import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BookdataService } from './../shared/bookdata.service';
import { Book } from './../shared/ibook';
@Component({
  selector: 'sg-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  constructor(private fb: FormBuilder, private bs: BookdataService) { }

  form: FormGroup;

  ngOnInit() {

    this.form = this.fb.group({
      "title": ['', Validators.required],
      "isbn": ['', Validators.required]
    });

  }

  onSubmit(): void {
    let b = new Book();
    b.isbn = this.form.value.isbn;
    b.title = this.form.value.title;
 
    this.bs.createBook(b).subscribe(book=> console.log(book));

  }
}
