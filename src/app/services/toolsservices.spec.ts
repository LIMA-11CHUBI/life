import { TestBed } from '@angular/core/testing';

import { Toolsservices } from './toolsservices';

describe('Toolsservices', () => {
  let service: Toolsservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Toolsservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
