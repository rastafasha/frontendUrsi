import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDeOrfebreriaComponent } from './cursos-de-orfebreria.component';

describe('CursosDeOrfebreriaComponent', () => {
  let component: CursosDeOrfebreriaComponent;
  let fixture: ComponentFixture<CursosDeOrfebreriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosDeOrfebreriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosDeOrfebreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
