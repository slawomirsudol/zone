import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListGenreFilterComponent } from './movie-list-filter.component';

describe('MovieListFilterComponent', () => {
  let component: MovieListGenreFilterComponent;
  let fixture: ComponentFixture<MovieListGenreFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListGenreFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListGenreFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
