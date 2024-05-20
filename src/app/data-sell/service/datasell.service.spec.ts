import { TestBed } from '@angular/core/testing';

import { DatasellService } from './datasell.service';

describe('DatasellService', () => {
  let service: DatasellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
