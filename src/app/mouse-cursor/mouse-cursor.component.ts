import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// 1F63F 
// Alt+128060

  positionX: number;
  positionY: number;
  onMouseMove($event: MouseEvent): void {
    this.positionX = $event.screenX;
    this.positionY = $event.screenY;
    console.log(event);
  }

}
