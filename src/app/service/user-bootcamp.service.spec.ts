import { TestBed } from '@angular/core/testing';

import { UserBootcampService } from './user-bootcamp.service';

describe('UserBootcampService', () => {
  let service: UserBootcampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBootcampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
