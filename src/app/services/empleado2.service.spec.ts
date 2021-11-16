import { TestBed } from '@angular/core/testing';

import { Empleado2Service } from './empleado2.service';

describe('Empleado2Service', () => {
  let service: Empleado2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Empleado2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
