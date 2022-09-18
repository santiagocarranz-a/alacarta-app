import { TestBed } from '@angular/core/testing';

import { HomePlatosService } from './home-platos.service';

describe('HomePlatosService', () => {
  let service: HomePlatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePlatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
