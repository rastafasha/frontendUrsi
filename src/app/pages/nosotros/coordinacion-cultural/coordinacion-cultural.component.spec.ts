import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinacionCulturalComponent } from './coordinacion-cultural.component';

describe('CoordinacionCulturalComponent', () => {
  let component: CoordinacionCulturalComponent;
  let fixture: ComponentFixture<CoordinacionCulturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinacionCulturalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinacionCulturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
