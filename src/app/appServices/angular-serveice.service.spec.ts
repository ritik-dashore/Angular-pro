import { TestBed } from '@angular/core/testing';

import { AngularServeiceService } from './angular-serveice.service';

describe('AngularServeiceService', () => {
  let service: AngularServeiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularServeiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
