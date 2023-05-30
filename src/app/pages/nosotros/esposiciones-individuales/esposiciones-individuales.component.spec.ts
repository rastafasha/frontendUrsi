import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsposicionesIndividualesComponent } from './esposiciones-individuales.component';

describe('EsposicionesIndividualesComponent', () => {
  let component: EsposicionesIndividualesComponent;
  let fixture: ComponentFixture<EsposicionesIndividualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsposicionesIndividualesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsposicionesIndividualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
