import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenseignementDonneesComponent } from './renseignement-donnees.component';

describe('RenseignementDonneesComponent', () => {
  let component: RenseignementDonneesComponent;
  let fixture: ComponentFixture<RenseignementDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenseignementDonneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenseignementDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
