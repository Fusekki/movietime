import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterSearchResultsComponent } from './theater-search-results.component';

describe('TheaterSearchResultsComponent', () => {
  let component: TheaterSearchResultsComponent;
  let fixture: ComponentFixture<TheaterSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
