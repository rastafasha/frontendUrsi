import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeUrsiGallettiComponent } from './acerca-de-ursi-galletti.component';

describe('AcercaDeUrsiGallettiComponent', () => {
  let component: AcercaDeUrsiGallettiComponent;
  let fixture: ComponentFixture<AcercaDeUrsiGallettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeUrsiGallettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeUrsiGallettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
