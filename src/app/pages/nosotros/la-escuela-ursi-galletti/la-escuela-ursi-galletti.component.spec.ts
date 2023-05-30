import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaEscuelaUrsiGallettiComponent } from './la-escuela-ursi-galletti.component';

describe('LaEscuelaUrsiGallettiComponent', () => {
  let component: LaEscuelaUrsiGallettiComponent;
  let fixture: ComponentFixture<LaEscuelaUrsiGallettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaEscuelaUrsiGallettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaEscuelaUrsiGallettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
