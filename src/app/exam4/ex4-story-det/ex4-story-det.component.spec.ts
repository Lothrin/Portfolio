import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4StoryDetComponent } from './ex4-story-det.component';

describe('Ex4StoryDetComponent', () => {
  let component: Ex4StoryDetComponent;
  let fixture: ComponentFixture<Ex4StoryDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4StoryDetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4StoryDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
