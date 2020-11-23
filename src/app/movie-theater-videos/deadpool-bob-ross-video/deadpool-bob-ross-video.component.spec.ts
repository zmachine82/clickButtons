import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadpoolBobRossVideoComponent } from './deadpool-bob-ross-video.component';

describe('DeadpoolBobRossVideoComponent', () => {
  let component: DeadpoolBobRossVideoComponent;
  let fixture: ComponentFixture<DeadpoolBobRossVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadpoolBobRossVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadpoolBobRossVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
