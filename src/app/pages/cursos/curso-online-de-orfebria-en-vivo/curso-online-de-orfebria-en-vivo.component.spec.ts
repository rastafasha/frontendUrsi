import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoOnlineDeOrfebriaEnVivoComponent } from './curso-online-de-orfebria-en-vivo.component';

describe('CursoOnlineDeOrfebriaEnVivoComponent', () => {
  let component: CursoOnlineDeOrfebriaEnVivoComponent;
  let fixture: ComponentFixture<CursoOnlineDeOrfebriaEnVivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoOnlineDeOrfebriaEnVivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoOnlineDeOrfebriaEnVivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
