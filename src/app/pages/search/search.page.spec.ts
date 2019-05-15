// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPage } from './search.page';
import { IonicModule } from '@ionic/angular';
import { SearchService } from 'src/services/search.service';
import { of } from 'rxjs';
import { ShowListModule } from 'src/app/components/show-list/show-list.module';

describe('SearchPage', () => {
  let component: SearchPage;
  let fixture: ComponentFixture<SearchPage>;
  let mockSearchService: jasmine.SpyObj<SearchService>;

  beforeEach(async(() => {
    mockSearchService = jasmine.createSpyObj('SearchService', [
      'retrieveShowOverview'
    ]);
    mockSearchService.retrieveShowOverview.and.returnValue(of({}));

    TestBed.configureTestingModule({
      imports: [IonicModule, ShowListModule],
      declarations: [SearchPage],
      providers: [{ provide: SearchService, useValue: mockSearchService }]
      // schemas: [IonicModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
