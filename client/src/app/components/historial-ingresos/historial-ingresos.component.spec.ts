import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialIngresosComponent } from './historial-ingresos.component';

describe('HistorialIngresosComponent', () => {
  let component: HistorialIngresosComponent;
  let fixture: ComponentFixture<HistorialIngresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialIngresosComponent]
    });
    fixture = TestBed.createComponent(HistorialIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
