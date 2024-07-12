import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4AlmnMethodComponent } from './ex4-almn-method.component';

describe('Ex4AlmnMethodComponent', () => {
  let component: Ex4AlmnMethodComponent;
  let fixture: ComponentFixture<Ex4AlmnMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4AlmnMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4AlmnMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
