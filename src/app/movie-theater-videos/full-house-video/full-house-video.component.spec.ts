import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullHouseVideoComponent } from './full-house-video.component';

describe('FullHouseVideoComponent', () => {
  let component: FullHouseVideoComponent;
  let fixture: ComponentFixture<FullHouseVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullHouseVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullHouseVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
