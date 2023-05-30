import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DijesComponent } from './dijes.component';

describe('DijesComponent', () => {
  let component: DijesComponent;
  let fixture: ComponentFixture<DijesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DijesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DijesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
