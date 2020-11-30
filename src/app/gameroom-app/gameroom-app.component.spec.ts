import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameroomAppComponent } from './gameroom-app.component';

describe('GameroomAppComponent', () => {
  let component: GameroomAppComponent;
  let fixture: ComponentFixture<GameroomAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameroomAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameroomAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
