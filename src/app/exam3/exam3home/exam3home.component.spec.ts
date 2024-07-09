import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam3homeComponent } from './exam3home.component';

describe('Exam3homeComponent', () => {
  let component: Exam3homeComponent;
  let fixture: ComponentFixture<Exam3homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam3homeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exam3homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
