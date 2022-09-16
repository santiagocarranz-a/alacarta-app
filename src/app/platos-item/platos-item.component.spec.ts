import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosItemComponent } from './platos-item.component';

describe('PlatosItemComponent', () => {
  let component: PlatosItemComponent;
  let fixture: ComponentFixture<PlatosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatosItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
