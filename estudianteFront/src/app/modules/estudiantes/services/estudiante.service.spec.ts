import { TestBed } from '@angular/core/testing';

import { estudianteService } from './estudiante.service';

describe('estudianteService', () => {
  let service: estudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(estudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
