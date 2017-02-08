import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})

export class TitleBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() title: string;
  @Input() farbe: string = "blue";
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  onH3Clicked(): void {
    this.clicked.emit(this.title);
  }
}
