import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exam3productsComponent } from './exam3products.component';

describe('Exam3productsComponent', () => {
  let component: Exam3productsComponent;
  let fixture: ComponentFixture<Exam3productsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exam3productsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exam3productsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
