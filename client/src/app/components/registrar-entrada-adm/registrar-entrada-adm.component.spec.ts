import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEntradaAdmComponent } from './registrar-entrada-adm.component';

describe('RegistrarEntradaAdmComponent', () => {
  let component: RegistrarEntradaAdmComponent;
  let fixture: ComponentFixture<RegistrarEntradaAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarEntradaAdmComponent]
    });
    fixture = TestBed.createComponent(RegistrarEntradaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
