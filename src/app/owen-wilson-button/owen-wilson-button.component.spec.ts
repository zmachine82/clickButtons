import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwenWilsonButtonComponent } from './owen-wilson-button.component';

describe('OwenWilsonButtonComponent', () => {
  let component: OwenWilsonButtonComponent;
  let fixture: ComponentFixture<OwenWilsonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwenWilsonButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwenWilsonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
