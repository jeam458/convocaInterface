import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Busqueda1Component } from './busqueda1.component';

describe('Busqueda1Component', () => {
  let component: Busqueda1Component;
  let fixture: ComponentFixture<Busqueda1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Busqueda1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Busqueda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
