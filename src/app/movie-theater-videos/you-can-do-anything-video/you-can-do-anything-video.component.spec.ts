import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouCanDoAnythingVideoComponent } from './you-can-do-anything-video.component';

describe('YouCanDoAnythingVideoComponent', () => {
  let component: YouCanDoAnythingVideoComponent;
  let fixture: ComponentFixture<YouCanDoAnythingVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouCanDoAnythingVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouCanDoAnythingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
