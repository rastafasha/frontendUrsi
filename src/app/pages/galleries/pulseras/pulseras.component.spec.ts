import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulserasComponent } from './pulseras.component';

describe('PulserasComponent', () => {
  let component: PulserasComponent;
  let fixture: ComponentFixture<PulserasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulserasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulserasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
