import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4InterDetComponent } from './ex4-inter-det.component';

describe('Ex4InterDetComponent', () => {
  let component: Ex4InterDetComponent;
  let fixture: ComponentFixture<Ex4InterDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4InterDetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4InterDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
