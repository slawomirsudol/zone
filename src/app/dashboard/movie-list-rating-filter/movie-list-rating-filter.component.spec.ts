import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListRatingFilterComponent } from './movie-list-rating-filter.component';

describe('MovieListRatingFilterComponent', () => {
  let component: MovieListRatingFilterComponent;
  let fixture: ComponentFixture<MovieListRatingFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListRatingFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListRatingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
