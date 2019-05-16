import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListComponent } from './show-list.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/pipes/pipes.module';

describe('ShowListComponent', () => {
  let component: ShowListComponent;
  let fixture: ComponentFixture<ShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule, PipesModule],
      declarations: [ShowListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
