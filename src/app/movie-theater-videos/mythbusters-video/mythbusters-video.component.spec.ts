import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythbustersVideoComponent } from './mythbusters-video.component';

describe('MythbustersVideoComponent', () => {
  let component: MythbustersVideoComponent;
  let fixture: ComponentFixture<MythbustersVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MythbustersVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MythbustersVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
