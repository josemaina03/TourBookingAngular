import { TestBed } from '@angular/core/testing';

import { hotelsService } from './hotel.service';

describe('hotelsService', () => {
  let service: hotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(hotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
