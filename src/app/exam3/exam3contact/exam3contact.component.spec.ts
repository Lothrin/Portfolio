import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam3contactComponent } from './exam3contact.component';

describe('Exam3contactComponent', () => {
  let component: Exam3contactComponent;
  let fixture: ComponentFixture<Exam3contactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam3contactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exam3contactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
