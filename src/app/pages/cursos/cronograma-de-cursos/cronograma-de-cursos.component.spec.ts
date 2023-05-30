import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaDeCursosComponent } from './cronograma-de-cursos.component';

describe('CronogramaDeCursosComponent', () => {
  let component: CronogramaDeCursosComponent;
  let fixture: ComponentFixture<CronogramaDeCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronogramaDeCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronogramaDeCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
