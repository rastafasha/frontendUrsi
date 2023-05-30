import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectoLaboralComponent } from './aspecto-laboral.component';

describe('AspectoLaboralComponent', () => {
  let component: AspectoLaboralComponent;
  let fixture: ComponentFixture<AspectoLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectoLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspectoLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
