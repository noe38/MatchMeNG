import { TestBed } from '@angular/core/testing';

import { InformatiqueService } from './informatique.service';

describe('InformatiqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformatiqueService = TestBed.get(InformatiqueService);
    expect(service).toBeTruthy();
  });
});
