import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowboardingVideoComponent } from './snowboarding-video.component';

describe('SnowboardingVideoComponent', () => {
  let component: SnowboardingVideoComponent;
  let fixture: ComponentFixture<SnowboardingVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowboardingVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
