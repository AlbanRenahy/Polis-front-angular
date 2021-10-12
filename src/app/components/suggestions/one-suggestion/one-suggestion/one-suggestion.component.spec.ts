import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSuggestionComponent } from './one-suggestion.component';

describe('OneSuggestionComponent', () => {
  let component: OneSuggestionComponent;
  let fixture: ComponentFixture<OneSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
