/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneTextComponent } from './one-text.component';

describe('OneTextComponent', () => {
  let component: OneTextComponent;
  let fixture: ComponentFixture<OneTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
