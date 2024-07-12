import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4navbarComponent } from './ex4navbar.component';

describe('Ex4navbarComponent', () => {
  let component: Ex4navbarComponent;
  let fixture: ComponentFixture<Ex4navbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4navbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4navbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
