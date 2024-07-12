import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4EventsComponent } from './ex4-events.component';

describe('Ex4EventsComponent', () => {
  let component: Ex4EventsComponent;
  let fixture: ComponentFixture<Ex4EventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4EventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
