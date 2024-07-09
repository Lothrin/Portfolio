import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam3detailsComponent } from './exam3details.component';

describe('Exam3detailsComponent', () => {
  let component: Exam3detailsComponent;
  let fixture: ComponentFixture<Exam3detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam3detailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exam3detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
