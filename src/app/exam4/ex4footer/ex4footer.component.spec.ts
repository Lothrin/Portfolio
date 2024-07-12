import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4footerComponent } from './ex4footer.component';

describe('Ex4footerComponent', () => {
  let component: Ex4footerComponent;
  let fixture: ComponentFixture<Ex4footerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4footerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4footerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
