import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sg-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})

export class TitleBoxComponent implements OnInit {

  @Input() title: string;
  @Input() farbe = 'blue';

  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.title = 'Mein Titel';
  }

  ngOnInit() {
  }



  onH3Clicked(): void {
    this.clicked.emit(this.title);
  }
}
