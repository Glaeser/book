import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-box-detail',
  templateUrl: './info-box-detail.component.html',
  styleUrls: ['./info-box-detail.component.css']
})
export class InfoBoxDetailComponent implements OnInit {

  constructor() { }

  isHidden: boolean;

  ngOnInit() {
  }

  ToggleInfo() {
    this.isHidden = !this.isHidden;
    const epps = `neuer wert ${this.isHidden}`;

    console.log(epps);

  }
}
