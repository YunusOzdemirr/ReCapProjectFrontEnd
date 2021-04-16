import { TestBed } from '@angular/core/testing';

import { BrandColorService } from './brand-color.service';

describe('BrandColorService', () => {
  let service: BrandColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
