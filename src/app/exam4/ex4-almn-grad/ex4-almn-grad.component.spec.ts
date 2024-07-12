import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4AlmnGradComponent } from './ex4-almn-grad.component';

describe('Ex4AlmnGradComponent', () => {
  let component: Ex4AlmnGradComponent;
  let fixture: ComponentFixture<Ex4AlmnGradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4AlmnGradComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4AlmnGradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
