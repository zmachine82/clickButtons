import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickFightVideoComponent } from './stick-fight-video.component';

describe('StickFightVideoComponent', () => {
  let component: StickFightVideoComponent;
  let fixture: ComponentFixture<StickFightVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickFightVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickFightVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
