import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShowPage } from './display-show.page';

describe('DisplayShowPage', () => {
  let component: DisplayShowPage;
  let fixture: ComponentFixture<DisplayShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayShowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
