import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sg-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form: FormGroup;

  ngOnInit() {

    this.form = this.fb.group({
      "title": ['', Validators.required],
      "isbn": ['', Validators.required]
    });

  }

  onSubmit(): void {
    console.log(this.form.value)
    alert(this.form.value.title + " anglegt")
  }
}
