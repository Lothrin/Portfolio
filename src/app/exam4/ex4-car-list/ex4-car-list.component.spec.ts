import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4CarListComponent } from './ex4-car-list.component';

describe('Ex4CarListComponent', () => {
  let component: Ex4CarListComponent;
  let fixture: ComponentFixture<Ex4CarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4CarListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
