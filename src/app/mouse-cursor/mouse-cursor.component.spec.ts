/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MouseCursorComponent } from './mouse-cursor.component';

describe('MouseCursorComponent', () => {
  let component: MouseCursorComponent;
  let fixture: ComponentFixture<MouseCursorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseCursorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
