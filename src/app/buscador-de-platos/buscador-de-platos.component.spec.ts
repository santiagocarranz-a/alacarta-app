import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorDePlatosComponent } from './buscador-de-platos.component';

describe('BuscadorDePlatosComponent', () => {
  let component: BuscadorDePlatosComponent;
  let fixture: ComponentFixture<BuscadorDePlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorDePlatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorDePlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
