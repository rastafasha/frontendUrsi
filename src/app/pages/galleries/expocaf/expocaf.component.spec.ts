import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpocafComponent } from './expocaf.component';

describe('ExpocafComponent', () => {
  let component: ExpocafComponent;
  let fixture: ComponentFixture<ExpocafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpocafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpocafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
