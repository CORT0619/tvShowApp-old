import { TestBed } from '@angular/core/testing';

import { PassShowsService } from './pass-shows.service';

describe('PassShowsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassShowsService = TestBed.get(PassShowsService);
    expect(service).toBeTruthy();
  });
});
