import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueproduteComponent } from './uniqueprodute.component';

describe('UniqueproduteComponent', () => {
  let component: UniqueproduteComponent;
  let fixture: ComponentFixture<UniqueproduteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueproduteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueproduteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
