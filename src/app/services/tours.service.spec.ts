import { TestBed } from '@angular/core/testing';

import { toursService } from './tours.service';

describe('toursService', () => {
  let service: toursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(toursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
