import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4HomeComponent } from './ex4-home.component';

describe('Ex4HomeComponent', () => {
  let component: Ex4HomeComponent;
  let fixture: ComponentFixture<Ex4HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
