import { TestBed } from '@angular/core/testing';

import { InterfaceServiceService } from './interface-service.service';

describe('InterfaceServiceService', () => {
  let service: InterfaceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfaceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
