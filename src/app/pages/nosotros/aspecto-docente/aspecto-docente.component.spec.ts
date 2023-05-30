import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectoDocenteComponent } from './aspecto-docente.component';

describe('AspectoDocenteComponent', () => {
  let component: AspectoDocenteComponent;
  let fixture: ComponentFixture<AspectoDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectoDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspectoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
