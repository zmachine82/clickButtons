import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherStickFightVideoComponent } from './another-stick-fight-video.component';

describe('AnotherStickFightVideoComponent', () => {
  let component: AnotherStickFightVideoComponent;
  let fixture: ComponentFixture<AnotherStickFightVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherStickFightVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherStickFightVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
