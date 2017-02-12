/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneVideoComponent } from './one-video.component';

describe('OneVideoComponent', () => {
  let component: OneVideoComponent;
  let fixture: ComponentFixture<OneVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
