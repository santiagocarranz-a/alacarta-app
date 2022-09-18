import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDataPlatosComponent } from './bar-data-platos.component';

describe('BarDataPlatosComponent', () => {
  let component: BarDataPlatosComponent;
  let fixture: ComponentFixture<BarDataPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarDataPlatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarDataPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
