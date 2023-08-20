import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaUsuarioComponent } from './entrada-usuario.component';

describe('EntradaUsuarioComponent', () => {
  let component: EntradaUsuarioComponent;
  let fixture: ComponentFixture<EntradaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaUsuarioComponent]
    });
    fixture = TestBed.createComponent(EntradaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
