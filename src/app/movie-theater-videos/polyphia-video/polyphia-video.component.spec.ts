import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyphiaVideoComponent } from './polyphia-video.component';

describe('PolyphiaVideoComponent', () => {
  let component: PolyphiaVideoComponent;
  let fixture: ComponentFixture<PolyphiaVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolyphiaVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolyphiaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
