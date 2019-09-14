import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { of, throwError } from 'rxjs';

describe('RegistrationService', () => {
  let service: RegistrationService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let mockConfigService: jasmine.SpyObj<ConfigService>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['post']);
    mockHttpClient.post.and.returnValue(of({}));

    mockConfigService = jasmine.createSpyObj('ConfigService', ['handleError']);
    mockConfigService.handleError.and.returnValue(throwError('Some error!'));

    service = new RegistrationService(mockHttpClient, mockConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
