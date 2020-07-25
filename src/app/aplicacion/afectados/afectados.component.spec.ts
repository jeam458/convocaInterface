import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfectadosComponent } from './afectados.component';

describe('AfectadosComponent', () => {
  let component: AfectadosComponent;
  let fixture: ComponentFixture<AfectadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfectadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfectadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
