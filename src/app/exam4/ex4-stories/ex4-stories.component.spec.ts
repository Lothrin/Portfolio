import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4StoriesComponent } from './ex4-stories.component';

describe('Ex4StoriesComponent', () => {
  let component: Ex4StoriesComponent;
  let fixture: ComponentFixture<Ex4StoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4StoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4StoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
