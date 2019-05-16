import { SearchService } from './search.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { of, throwError } from 'rxjs';

describe('SearchService', () => {
  let service: SearchService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let mockConfigService: jasmine.SpyObj<ConfigService>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['get']);
    mockHttpClient.get.and.returnValue(of({}));

    mockConfigService = jasmine.createSpyObj('ConfigService', ['handleError']);
    mockConfigService.handleError.and.returnValue(throwError('Some error!'));

    service = new SearchService(mockHttpClient, mockConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
