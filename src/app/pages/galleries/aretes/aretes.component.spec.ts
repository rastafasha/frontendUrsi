import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AretesComponent } from './aretes.component';

describe('AretesComponent', () => {
  let component: AretesComponent;
  let fixture: ComponentFixture<AretesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AretesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AretesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
