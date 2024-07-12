import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4CareerComponent } from './ex4-career.component';

describe('Ex4CareerComponent', () => {
  let component: Ex4CareerComponent;
  let fixture: ComponentFixture<Ex4CareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4CareerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4CareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
