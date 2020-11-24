import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LofiMusicVideoComponent } from './lofi-music-video.component';

describe('LofiMusicVideoComponent', () => {
  let component: LofiMusicVideoComponent;
  let fixture: ComponentFixture<LofiMusicVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LofiMusicVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LofiMusicVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
