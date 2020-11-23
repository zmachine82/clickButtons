import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterStickFightVideoComponent } from './better-stick-fight-video.component';

describe('BetterStickFightVideoComponent', () => {
  let component: BetterStickFightVideoComponent;
  let fixture: ComponentFixture<BetterStickFightVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterStickFightVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterStickFightVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
