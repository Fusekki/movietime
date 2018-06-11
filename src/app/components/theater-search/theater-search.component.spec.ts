import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterSearchComponent } from './theater-search.component';

describe('TheaterSearchComponent', () => {
  let component: TheaterSearchComponent;
  let fixture: ComponentFixture<TheaterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
