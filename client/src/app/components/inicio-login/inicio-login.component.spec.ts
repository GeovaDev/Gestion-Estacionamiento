import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioLoginComponent } from './inicio-login.component';

describe('InicioLoginComponent', () => {
  let component: InicioLoginComponent;
  let fixture: ComponentFixture<InicioLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioLoginComponent]
    });
    fixture = TestBed.createComponent(InicioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
