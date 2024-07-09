import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1aboutComponent } from './ex1about.component';

describe('Ex1aboutComponent', () => {
  let component: Ex1aboutComponent;
  let fixture: ComponentFixture<Ex1aboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex1aboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex1aboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
