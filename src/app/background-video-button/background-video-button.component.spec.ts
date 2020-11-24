import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundVideoButtonComponent } from './background-video-button.component';

describe('BackgroundVideoButtonComponent', () => {
  let component: BackgroundVideoButtonComponent;
  let fixture: ComponentFixture<BackgroundVideoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundVideoButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundVideoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
