import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { ConfigService } from './config.service';
import { throwError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('LoginService', () => {
  let service: LoginService;
  let mockConfigService: jasmine.SpyObj<ConfigService>;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['post']);
    mockHttpClient.post.and.returnValue(of({}));

    mockConfigService = jasmine.createSpyObj('ConfigService', ['handleError']);
    mockConfigService.handleError.and.returnValue(throwError('Some error!'));

    service = new LoginService(mockHttpClient, mockConfigService);
  });
});
