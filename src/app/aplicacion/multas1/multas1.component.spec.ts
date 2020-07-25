import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Multas1Component } from './multas1.component';

describe('Multas1Component', () => {
  let component: Multas1Component;
  let fixture: ComponentFixture<Multas1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Multas1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Multas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
