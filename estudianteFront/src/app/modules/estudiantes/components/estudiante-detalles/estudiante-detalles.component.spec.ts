import { ComponentFixture, TestBed } from '@angular/core/testing';

import { estudianteDetallesComponent } from './estudiante-detalles.component';

describe('estudianteDetallesComponent', () => {
  let component: estudianteDetallesComponent;
  let fixture: ComponentFixture<estudianteDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ estudianteDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(estudianteDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
