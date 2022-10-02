import { TestBed } from '@angular/core/testing';

import { ProdutesService } from './produtes.service';

describe('ProdutesService', () => {
  let service: ProdutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
