import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1recipeofthemonthComponent } from './ex1recipeofthemonth.component';

describe('Ex1recipeofthemonthComponent', () => {
  let component: Ex1recipeofthemonthComponent;
  let fixture: ComponentFixture<Ex1recipeofthemonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex1recipeofthemonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex1recipeofthemonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
