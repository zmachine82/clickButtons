import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedPandasVideoComponent } from './red-pandas-video.component';

describe('RedPandasVideoComponent', () => {
  let component: RedPandasVideoComponent;
  let fixture: ComponentFixture<RedPandasVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedPandasVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedPandasVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
