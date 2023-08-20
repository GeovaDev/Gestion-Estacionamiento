import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisVehiculosComponent } from './mis-vehiculos.component';

describe('MisVehiculosComponent', () => {
  let component: MisVehiculosComponent;
  let fixture: ComponentFixture<MisVehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisVehiculosComponent]
    });
    fixture = TestBed.createComponent(MisVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
