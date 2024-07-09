import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam3cartComponent } from './exam3cart.component';

describe('Exam3cartComponent', () => {
  let component: Exam3cartComponent;
  let fixture: ComponentFixture<Exam3cartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam3cartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exam3cartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
