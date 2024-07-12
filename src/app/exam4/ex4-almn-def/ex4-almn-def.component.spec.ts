import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4AlmnDefComponent } from './ex4-almn-def.component';

describe('Ex4AlmnDefComponent', () => {
  let component: Ex4AlmnDefComponent;
  let fixture: ComponentFixture<Ex4AlmnDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4AlmnDefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4AlmnDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
