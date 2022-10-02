import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliesproductetComponent } from './detaliesproductet.component';

describe('DetaliesproductetComponent', () => {
  let component: DetaliesproductetComponent;
  let fixture: ComponentFixture<DetaliesproductetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaliesproductetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaliesproductetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
