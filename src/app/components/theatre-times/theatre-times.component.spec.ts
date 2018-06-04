import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreTimesComponent } from './theatre-times.component';

describe('TheatreTimesComponent', () => {
  let component: TheatreTimesComponent;
  let fixture: ComponentFixture<TheatreTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatreTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
