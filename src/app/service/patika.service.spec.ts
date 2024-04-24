import { TestBed } from '@angular/core/testing';

import { PatikaService } from './patika.service';

describe('PatikaService', () => {
  let service: PatikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
