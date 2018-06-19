import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimesHeaderComponent } from './showtimes-header.component';

describe('ShowtimesHeaderComponent', () => {
  let component: ShowtimesHeaderComponent;
  let fixture: ComponentFixture<ShowtimesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
