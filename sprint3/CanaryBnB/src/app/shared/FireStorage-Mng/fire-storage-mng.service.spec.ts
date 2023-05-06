import { TestBed } from '@angular/core/testing';

import { FireStorageMngService } from './fire-storage-mng.service';

describe('FireStorageMngService', () => {
  let service: FireStorageMngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireStorageMngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
