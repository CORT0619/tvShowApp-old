import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoginPage } from './create-login.page';

describe('CreateLoginPage', () => {
  let component: CreateLoginPage;
  let fixture: ComponentFixture<CreateLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
