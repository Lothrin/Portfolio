import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam2Component } from './exam2.component';

describe('Exam2Component', () => {
  let component: Exam2Component;
  let fixture: ComponentFixture<Exam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
