import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { ConfigService } from './config.service';
import { throwError, of } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

describe('LoginService', () => {
  let loginService: LoginService;
  let mockConfigService: jasmine.SpyObj<ConfigService>;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockConfigService = jasmine.createSpyObj('ConfigService', ['handleError']);
    mockConfigService.handleError.and.returnValue(throwError('Some error!'));

    mockHttpClient = jasmine.createSpyObj('HttpClient', ['post']);
    // mockHttpClient.post.and.returnValue(of({}));

    loginService = new LoginService(<any>mockHttpClient, mockConfigService);
  });

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
