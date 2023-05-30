import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsposicionesColectivasComponent } from './esposiciones-colectivas.component';

describe('EsposicionesColectivasComponent', () => {
  let component: EsposicionesColectivasComponent;
  let fixture: ComponentFixture<EsposicionesColectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsposicionesColectivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsposicionesColectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
