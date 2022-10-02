import { TestBed } from '@angular/core/testing';

import { ProducetService } from './producet.service';

describe('ProducetService', () => {
  let service: ProducetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
