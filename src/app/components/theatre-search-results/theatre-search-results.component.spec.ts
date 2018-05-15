import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreSearchResultsComponent } from './theatre-search-results.component';

describe('TheatreSearchResultsComponent', () => {
  let component: TheatreSearchResultsComponent;
  let fixture: ComponentFixture<TheatreSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatreSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
