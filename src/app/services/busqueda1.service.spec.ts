import { TestBed } from '@angular/core/testing';

import { Busqueda1Service } from './busqueda1.service';

describe('Busqueda1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Busqueda1Service = TestBed.get(Busqueda1Service);
    expect(service).toBeTruthy();
  });
});
