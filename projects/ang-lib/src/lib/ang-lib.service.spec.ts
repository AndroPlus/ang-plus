import { TestBed } from '@angular/core/testing';

import { AngLibService } from './ang-lib.service';

describe('AngLibService', () => {
  let service: AngLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
