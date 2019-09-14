import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorToast } from './error-toast.component';

describe('ErrorToast', () => {
  let component: ErrorToast;
  let fixture: ComponentFixture<ErrorToast>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorToast ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorToast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
