import { TestBed } from '@angular/core/testing';

import { CorroborarPlatosService } from './corroborar-platos.service';

describe('CorroborarPlatosService', () => {
  let service: CorroborarPlatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorroborarPlatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
