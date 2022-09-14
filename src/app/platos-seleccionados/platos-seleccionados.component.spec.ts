import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosSeleccionadosComponent } from './platos-seleccionados.component';

describe('PlatosSeleccionadosComponent', () => {
  let component: PlatosSeleccionadosComponent;
  let fixture: ComponentFixture<PlatosSeleccionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatosSeleccionadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatosSeleccionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
