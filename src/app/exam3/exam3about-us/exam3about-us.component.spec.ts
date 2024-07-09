import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam3aboutUsComponent } from './exam3about-us.component';

describe('Exam3aboutUsComponent', () => {
  let component: Exam3aboutUsComponent;
  let fixture: ComponentFixture<Exam3aboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam3aboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exam3aboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
