import { TestBed } from '@angular/core/testing';

import { ServicioExamenParteFrontService } from './servicio-examen-parte-front.service';

describe('ServicioExamenParteFrontService', () => {
  let service: ServicioExamenParteFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioExamenParteFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
